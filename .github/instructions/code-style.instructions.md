# รูปแบบการเขียนโค้ด
````instructions
# รูปแบบการเขียนโค้ด (Real-time Chat)

## การตั้งชื่อไฟล์
- Component: PascalCase (เช่น `App.jsx`, `ChatRoom.jsx`, `MessageList.jsx`)
- JavaScript files: kebab-case (เช่น `server.js`, `socket-server.js`)
- Config files: kebab-case (เช่น `tailwind.config.js`, `vite.config.js`)

## การตั้งชื่อตัวแปรและฟังก์ชัน
- ตัวแปร: camelCase (เช่น `messages`, `typingUsers`, `currentUser`)
- ฟังก์ชัน: camelCase (เช่น `handleSend()`, `handleTyping()`, `joinRoom()`)
- React Components: PascalCase (เช่น `JoinForm`, `ChatRoom`, `MessageInput`)
- ค่าคงที่: UPPER_SNAKE_CASE (เช่น `SERVER_URL`, `SOCKET_OPTIONS`)

## กฎการเขียนโค้ด

### Frontend (React)
- ใช้ Functional Components + Hooks (เช่น `useState`, `useEffect`)
- ใช้ Socket.io Client สำหรับ real-time events
- แยกคอมโพเนนต์ตามหน้าที่: input, list, room layout
- ใช้ Tailwind CSS utility classes สำหรับ layout/UI
- จำกัดความซับซ้อนในแต่ละคอมโพเนนต์ (Single Responsibility)

### Backend (Express + Socket.io)
- ใช้ async/await สำหรับงาน async
- แยก event handlers ตามประเภท (`join`, `message`, `typing`, `disconnect`)
- กำหนด CORS ให้ตรงกับ frontend dev URL
- Validate payload ทันทีที่รับ event
- Logging แบบกระชับสำหรับ debug

## ตัวอย่าง React ChatRoom Component

```javascript
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:8000', { transports: ['websocket'] })

export default function ChatRoom({ username }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typingUsers, setTypingUsers] = useState([])

  useEffect(() => {
    if (username) socket.emit('join', { username })

    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg])
    })

    socket.on('typing', ({ username, isTyping }) => {
      setTypingUsers((prev) => {
        const set = new Set(prev)
        if (isTyping) set.add(username)
        else set.delete(username)
        return Array.from(set)
      })
    })

    return () => {
      socket.off('message')
      socket.off('typing')
    }
  }, [username])

  const handleSend = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    socket.emit('message', { username, text, timestamp: Date.now() })
    setInput('')
  }

  const handleTyping = (e) => {
    const value = e.target.value
    setInput(value)
    socket.emit('typing', { username, isTyping: !!value })
  }

  return (
    <div className="flex flex-col h-full">
      <ul className="flex-1 overflow-y-auto space-y-2 p-4">
        {messages.map((m, i) => (
          <li key={i} className="bg-gray-100 rounded px-3 py-2">
            <span className="font-medium">{m.username}:</span> {m.text}
            <span className="ml-2 text-xs text-gray-500">{new Date(m.timestamp).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>

      {typingUsers.length > 0 && (
        <div className="px-4 pb-2 text-sm text-gray-500">
          {typingUsers.join(', ')} กำลังพิมพ์...
        </div>
      )}

      <form onSubmit={handleSend} className="flex gap-2 p-4 border-t">
        <input
          value={input}
          onChange={handleTyping}
          placeholder="พิมพ์ข้อความ..."
          className="flex-1 border rounded px-3 py-2 focus:outline-none"
        />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">ส่ง</button>
      </form>
    </div>
  )
}
```

## ตัวอย่าง Socket.io Server (Express)

```javascript
const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))
app.get('/health', (req, res) => res.json({ ok: true }))

const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: 'http://localhost:5173' }
})

const users = new Set()

io.on('connection', (socket) => {
  socket.on('join', ({ username }) => {
    if (typeof username !== 'string' || !username.trim()) return
    const name = username.trim()
    users.add(name)
    socket.data.username = name
    io.emit('userJoined', { username: name })
    io.emit('userList', { users: Array.from(users) })
  })

  socket.on('message', ({ username, text, timestamp }) => {
    if (!text || typeof text !== 'string') return
    const msg = { username: username || socket.data.username, text: text.trim(), timestamp: timestamp || Date.now() }
    io.emit('message', msg)
  })

  socket.on('typing', ({ username, isTyping }) => {
    io.emit('typing', { username: username || socket.data.username, isTyping: !!isTyping })
  })

  socket.on('disconnect', () => {
    const name = socket.data.username
    if (name) {
      users.delete(name)
      io.emit('userLeft', { username: name })
      io.emit('userList', { users: Array.from(users) })
    }
  })
})

server.listen(8000, () => console.log('Server listening on http://localhost:8000'))
```

## Best Practices
1. **ความเรียบง่าย**: โค้ดสั้น กระชับ อ่านง่าย
2. **Naming**: ชื่อสื่อความหมาย หลีกเลี่ยงชื่อสั้นๆ เช่น `x`, `tmp`
3. **Single Responsibility**: แต่ละคอมโพเนนต์/ฟังก์ชันทำงานอย่างชัดเจน
4. **Error Handling**: ตรวจสอบ payload ทุก event, ป้องกันค่า `undefined/null`
5. **Comments**: เขียนเมื่อจำเป็น เน้นเหตุผล (why) มากกว่าอธิบาย (what)

````
