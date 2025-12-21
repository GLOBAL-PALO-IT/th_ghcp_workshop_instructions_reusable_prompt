# Copilot Instructions (สำหรับ Agent ที่ทำงานในโปรเจคนี้)

## ภาพรวมสถาปัตยกรรม
- **โครงสร้างหลัก**: ฝั่ง `server/` เป็น Express + Socket.io, ฝั่ง `client/` เป็น React 18 (JavaScript ไม่ใช้ TypeScript) ที่เชื่อมต่อผ่าน Socket.io-client. ดูตัวอย่าง/ขั้นตอนใน [chat-app-tasks/README.md](chat-app-tasks/README.md).
- **ขอบเขตบริการ**: Server จัดการ connection, user list, broadcasting และ typing indicators; Client จัดการ state, join/leave, แสดงข้อความ และสถานะผู้ใช้.
- **รูปแบบข้อมูลข้อความ**: `{ id, username, message, timestamp, type }` โดย `type` อาจเป็น `message` หรือ `system`. ตัวอย่างการใช้งานอยู่ใน [task-7-react-app-component.md](chat-app-tasks/task-7-react-app-component.md#L1).

## Workflow สำคัญ (รัน/ดีบัก)
- **Node version**: ค่าเริ่มต้นใช้ `nvm` กับ Node v25 ตามแนวทางโปรเจค. หากเจอ dependency native (เช่น `better-sqlite3` ในเอกสาร Todo Web App) ให้สลับเป็น v20 ตาม [README.md](README.md#L24-L49).
- **พอร์ตการรัน**: Chat server ใช้ `PORT=8000` จาก `.env`, ฝั่ง React (CRA) ที่งานตัวอย่างใช้ `3000`. ตรวจรายละเอียดใน [task-2-server-setup.md](chat-app-tasks/task-2-server-setup.md#L1).
- **คำสั่งรัน**:
	- Server: ใน `server/` ใช้ `npm run dev` (nodemon) หรือ `npm start`.
	- Client: ใน `client/` ใช้ `npm start` (CRA) หรือถ้าใช้ Vite ให้ใช้ `npm run dev` ที่พอร์ต 5173.
- **ตรวจสุขภาพระบบ**: เปิด `http://localhost:8000/health` ตามตัวอย่างใน [task-4-socketio-server.md](chat-app-tasks/task-4-socketio-server.md#L1).
- **แก้ปัญหา Path พิเศษ**: โฟลเดอร์นี้มี zero‑width space ซึ่งทำให้ `npm install` ล้มเหลว. วิธีแก้อยู่ใน [README.md](README.md#L5-L23).

## รูปแบบ/แนวทางการเขียน
- **Frontend**: Functional components + Hooks (`useState`, `useEffect`), สื่อสารผ่าน Socket.io-client, แยกคอมโพเนนต์ เช่น `JoinForm`, `ChatRoom`, `MessageList` ตาม [task-8](chat-app-tasks/task-8-join-form-component.md#L1) และ [task-9](chat-app-tasks/task-9-chat-room-layout.md#L1).
- **Backend**: ใช้ `async/await`, จัด middleware (`helmet`, `morgan`, `cors`, `express.json`), จัดการ events ของ Socket.io: `join`, `message`, `typing_start`, `typing_stop`, `disconnect` ตาม [task-4](chat-app-tasks/task-4-socketio-server.md#L1) และ [task-6](chat-app-tasks/task-6-typing-indicators.md#L1).
- **Validation & Sanitization**: ตรวจและ sanitize message ฝั่ง server (escape HTML), เก็บประวัติข้อความ in‑memory จำกัด 100 รายการ ตาม [task-5](chat-app-tasks/task-5-message-broadcasting.md#L1).

## การเชื่อมต่อและการตั้งค่า
- **CORS**: ตั้งค่า `CLIENT_URL` ใน `.env` (ค่าเริ่มต้น `http://localhost:3000`) และส่งให้ `io(...)` ผ่าน option `cors`. อ้างอิง [task-2-server-setup.md](chat-app-tasks/task-2-server-setup.md#L1).
- **การเชื่อมต่อ Socket**: Client เชื่อม `io('http://localhost:8000', { transports: ['websocket','polling'] })` แล้ว subscribe events: `welcome/userList/message/messageHistory/error` เป็นต้น. ดูตัวอย่างใน [task-7-react-app-component.md](chat-app-tasks/task-7-react-app-component.md#L1).
- **Typing indicators**: ใช้ Map เก็บสถานะ พร้อม auto‑timeout (เช่น 3 วินาที) และ broadcast เฉพาะผู้รับคนอื่น. อ้างอิง [task-6-typing-indicators.md](chat-app-tasks/task-6-typing-indicators.md#L1).

## ข้อควรระวัง/ความแตกต่างเฉพาะโปรเจค
- โปรเจคนี้เป็นสื่อการสอน จึงมีทั้งแนวทาง Vite+Tailwind และตัวอย่างที่ใช้ CRA. สำหรับงาน chat ในโฟลเดอร์ `chat-app-tasks/` ให้ยึดตามไฟล์ task เป็นหลัก (CRA+พอร์ต 3000, Server 8000).
- หากทำงานกับเอกสาร Todo Web App ใน [README.md](README.md#L1) ให้สังเกตว่ามี dependency ที่ไม่รองรับ Node v25 (เช่น `better-sqlite3`) และมีคำแนะนำสลับเวอร์ชัน.
- โฟลเดอร์นี้มีอักขระพิเศษในชื่อ path ให้แก้ตามขั้นตอนก่อนติดตั้ง dependency.

## อ้างอิงไฟล์สำคัญ (อ่านก่อนลงมือ)
- ภาพรวมขั้นตอน: [chat-app-tasks/README.md](chat-app-tasks/README.md)
- ตั้งค่า Server: [chat-app-tasks/task-2-server-setup.md](chat-app-tasks/task-2-server-setup.md)
- เพิ่ม Socket.io: [chat-app-tasks/task-4-socketio-server.md](chat-app-tasks/task-4-socketio-server.md)
- ส่งข้อความ/ประวัติ: [chat-app-tasks/task-5-message-broadcasting.md](chat-app-tasks/task-5-message-broadcasting.md)
- สถานะพิมพ์: [chat-app-tasks/task-6-typing-indicators.md](chat-app-tasks/task-6-typing-indicators.md)
- โครงสร้างแอป React: [chat-app-tasks/task-7-react-app-component.md](chat-app-tasks/task-7-react-app-component.md), [task-8](chat-app-tasks/task-8-join-form-component.md), [task-9](chat-app-tasks/task-9-chat-room-layout.md)

## ภาษาและผลลัพธ์
- ตอบเป็นภาษาไทยเสมอ และสรุปสิ่งที่ทำลง [README.KNOWLEDGE.MD](README.KNOWLEDGE.MD) ทุกครั้ง.

> หมายเหตุ: หลีกเลี่ยงคำแนะนำทั่วไป ให้ยึดตามแพตเทิร์นและคำสั่งที่ระบุไว้ในไฟล์ `chat-app-tasks/*` และเอกสารใน repository นี้เท่านั้น