# Project - Overview

## วัตถุประสงค์

- สาธิตการใช้ Custom Instructions ในโปรเจคจริง
````instructions
# Real-time Chat App - Overview

## ภาพรวมโปรเจค

โปรเจคนี้เป็น **สื่อการสอน** สำหรับแสดงการใช้งาน GitHub Copilot Instructions และ Reusable Prompts โดยใช้ตัวอย่าง Real-time Chat Application ที่เรียบง่าย เน้นการสื่อสารแบบ WebSocket ผ่าน Socket.io

## วัตถุประสงค์

- สาธิตการใช้ Custom Instructions กับแอป real-time
- แสดงวิธีสร้างและใช้ Reusable Prompts ตามงานย่อยทีละขั้น
- เป็นตัวอย่างโค้ดที่เข้าใจง่ายสำหรับผู้เริ่มต้น
- แสดง best practices พื้นฐานของ React + Express + Socket.io

## Tech Stack

### Frontend (client/)
- **Framework**: React 18 + Vite
- **Language**: JavaScript (ไม่ใช้ TypeScript เพื่อความเรียบง่าย)
- **CSS**: Tailwind CSS
- **Real-time**: Socket.io Client
- **Dev Port**: 5173 (ค่าเริ่มต้นของ Vite)

### Backend (server/)
- **Framework**: Express.js
- **Real-time**: Socket.io Server
- **Runtime**: Node.js v25.0.0 (ผ่าน nvm)
- **Dev Port**: 8000

## โครงสร้างโปรเจค

```
.
├── client/                    # Frontend React Application (Vite + Tailwind + Socket.io Client)
│   ├── src/
│   │   ├── App.jsx           # Main app
│   │   ├── main.jsx          # Entry
│   │   └── components/
│   │       ├── JoinForm.jsx
│   │       ├── ChatRoom.jsx
│   │       ├── MessageList.jsx
│   │       └── MessageInput.jsx
│   └── package.json
│
├── server/                    # Backend Express + Socket.io
│   ├── server.js             # HTTP + Socket.io events
│   └── package.json
│
├── .github/
│   ├── copilot-instructions.md     # Main instructions summary
│   └── instructions/               # Categorized instructions
│       ├── general.instructions.md
│       ├── tech-stack.instructions.md
│       ├── code-style.instructions.md
│       ├── security.instructions.md
│       └── project.instructions.md
│
├── chat-app-tasks/            # งานย่อย 1-10 สำหรับสร้างแอปทีละขั้น
├── learning/                  # เอกสารการสอน: Custom Instructions & Reusable Prompts
└── .nvmrc                     # Node version
```

## ฟีเจอร์

- ✅ เข้าร่วมแชทด้วยชื่อผู้ใช้ (`join`)
- ✅ ส่งข้อความแบบ real-time (`message`)
- ✅ แสดงสถานะกำลังพิมพ์ (`typing`)
- ✅ รายชื่อผู้ใช้ออนไลน์ (`userList`)
- ✅ แจ้งเตือนเข้าร่วม/ออกจากห้อง (`userJoined`, `userLeft`)

## Socket.io Events

| Direction | Event | Payload |
|-----------|-------|---------|
| Client → Server | `join` | `{ username }` |
| Client → Server | `message` | `{ username, text, timestamp }` |
| Client → Server | `typing` | `{ username, isTyping }` |
| Server → Client | `message` | `{ username, text, timestamp }` |
| Server → Client | `userJoined` | `{ username }` |
| Server → Client | `userLeft` | `{ username }` |
| Server → Client | `typing` | `{ username, isTyping }` |
| Server → Client | `userList` | `{ users: string[] }` |

## การรันโปรเจค

### 1. ตั้งค่า Node Version
```bash
nvm use
# ใช้ Node v25.0.0 จาก .nvmrc
```

### 2. รัน Backend
```bash
cd server
npm install
npm run dev
# Server (HTTP + Socket.io): http://localhost:8000
```

### 3. รัน Frontend (เปิด terminal ใหม่)
```bash
cd client
npm install
npm run dev
# Web (Vite): http://localhost:5173
```

## การใช้งานสำหรับการสอน

### 1. แสดง Custom Instructions
- อธิบายโครง `.github/instructions/` และวิธีสั่งให้ Copilot ปฏิบัติตาม
- ปรับเนื้อหา `tech-stack`, `code-style`, `security` ให้ตรงกับ real-time

### 2. ใช้ Reusable Prompts แบบงานย่อย
- ทำตาม `chat-app-tasks/` ทีละไฟล์ (1 → 10)
- ใช้ prompt เทมเพลตเพื่อ scaffold โค้ดและตรวจงาน

### 3. ตัวอย่างการพัฒนาต่อยอด
- เพิ่มห้องแชทหลายห้อง, เก็บประวัติข้อความฝั่ง server
- ปรับ UI: bubble, avatars, timestamps, auto-scroll
- เพิ่ม validation, rate-limiting, logging
- เขียน unit/integration tests สำหรับ socket events

## หลักการออกแบบ

### 1. Simplicity First
- ไม่ใช้ TypeScript, ไม่ใช้ state management library
- โครงสร้าง component ชัดเจน แยกส่วนตามหน้าที่

### 2. Readability
- โค้ดอ่านง่าย มีชื่อตัวแปร/ฟังก์ชันสื่อความหมาย
- คอมโพเนนต์สั้น กระชับ จัดการ state อย่างตรงไปตรงมา

### 3. Best Practices
- Functional Components + Hooks
- Socket.io events ที่ชัดเจน และ validate payload
- CORS + Helmet สำหรับ HTTP
- Error handling ที่ปลอดภัย ไม่ส่ง internal details ให้ client
````