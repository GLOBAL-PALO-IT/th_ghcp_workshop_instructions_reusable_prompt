import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
app.use(helmet());
app.use(morgan('combined'));
const corsOrigin = process.env.CLIENT_URL || 'http://localhost:3000';
app.use(cors({ origin: corsOrigin, methods: ['GET', 'POST'], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (_req, res) => res.json({ message: 'Chat Server API', version: '1.0.0', endpoints: { health: '/health' } }));
app.get('/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: new Date(), environment: process.env.NODE_ENV || 'development', port: PORT });
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: corsOrigin,
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 8000;

// In-memory rooms storage
const rooms = new Map(); // roomName -> { users: Map(socketId -> username), messages: [] }

function getRoom(roomName) {
  let room = rooms.get(roomName);
  if (!room) {
    room = { users: new Map(), messages: [] };
    rooms.set(roomName, room);
  }
  return room;
}

// Simple sanitize to avoid HTML/script injection
function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"'`]/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  })[m]);
}

function isValidName(name) {
  if (typeof name !== 'string') return false;
  const n = name.trim();
  return n.length > 0 && n.length <= 32 && /^[a-zA-Z0-9_\-]+$/.test(n);
}

function isValidRoom(room) {
  return isValidName(room);
}

function isValidMessage(text) {
  if (typeof text !== 'string') return false;
  const t = text.trim();
  return t.length > 0 && t.length <= 500;
}

// Very simple per-socket rate limiting
const buckets = new Map(); // key -> { count, start }
function checkBucket(id, key, limit, intervalMs) {
  const bk = `${id}:${key}`;
  const now = Date.now();
  let b = buckets.get(bk);
  if (!b) {
    b = { count: 0, start: now };
    buckets.set(bk, b);
  }
  if (now - b.start > intervalMs) {
    b.count = 0;
    b.start = now;
  }
  b.count += 1;
  return b.count <= limit;
}

io.on('connection', (socket) => {
  socket.data.username = null;
  socket.data.room = null;

  socket.on('join', (payload = {}) => {
    const { username, room } = payload;
    if (!isValidName(username) || !isValidRoom(room)) {
      socket.emit('join_error', { message: 'ข้อมูลไม่ถูกต้อง' });
      return;
    }

    socket.data.username = username.trim();
    socket.data.room = room.trim();

    const r = getRoom(socket.data.room);
    r.users.set(socket.id, socket.data.username);
    socket.join(socket.data.room);

    const userList = Array.from(r.users.values());
    socket.emit('join_success', {
      room: socket.data.room,
      userList,
      messages: r.messages
    });
    io.to(socket.data.room).emit('user_list', { userList });
  });

  socket.on('message', (payload = {}) => {
    const { text } = payload;
    const { username, room } = socket.data;

    if (!username || !room) return; // not joined
    if (!isValidMessage(text)) return;

    if (!checkBucket(socket.id, 'message', 5, 3000)) {
      socket.emit('message_error', { message: 'ส่งถี่เกินไป กรุณารอสักครู่' });
      return;
    }

    const r = getRoom(room);
    const msg = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      user: username,
      text: sanitizeText(text.trim()),
      ts: Date.now()
    };
    r.messages.push(msg);
    if (r.messages.length > 200) r.messages.shift();
    io.to(room).emit('message', msg);
  });

  socket.on('typing', () => {
    const { username, room } = socket.data;
    if (!username || !room) return;
    if (!checkBucket(socket.id, 'typing', 10, 3000)) return; // soft limit
    socket.to(room).emit('typing', { user: username, ts: Date.now() });
  });

  socket.on('disconnect', () => {
    const { room } = socket.data;
    if (room && rooms.has(room)) {
      const r = rooms.get(room);
      r.users.delete(socket.id);
      const userList = Array.from(r.users.values());
      io.to(room).emit('user_list', { userList });
      if (r.users.size === 0 && r.messages.length > 500) {
        r.messages = r.messages.slice(-100); // trim history if room empty for long
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 CORS enabled for: ${corsOrigin}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});
