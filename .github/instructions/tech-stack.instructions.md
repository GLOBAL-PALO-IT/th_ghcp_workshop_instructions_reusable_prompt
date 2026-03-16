---
applyTo: "server/**,client/**,*.js,*.jsx,*.json"
description: "Tech stack และ dependencies: React 18 (CRA), Express REST API — ใช้กับไฟล์โค้ดและ config"
---

# Tech Stack

## Frontend (client/)
- **React 18** ผ่าน Create React App (CRA)
- **JavaScript** (ไม่ใช้ TypeScript)
- **CSS** ธรรมดา (ไม่ใช้ Tailwind หรือ CSS-in-JS)
- **fetch API** สำหรับเรียก REST API

### Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```

## Backend (server/)
- **Express.js** สำหรับ REST API
- **cors** สำหรับ Cross-Origin requests
- **helmet** สำหรับ security headers
- **morgan** สำหรับ request logging
- **dotenv** สำหรับ environment variables
- **nodemon** สำหรับ auto-restart ตอน dev

### Dependencies
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "helmet": "^7.1.0",
  "morgan": "^1.10.0",
  "dotenv": "^16.3.1"
}
```

### Dev Dependencies
```json
{
  "nodemon": "^3.0.2"
}
```

## สิ่งที่ไม่ได้ใช้ (เพื่อความเรียบง่าย)
- ❌ TypeScript
- ❌ Database (ใช้ in-memory array แทน)
- ❌ Socket.io / WebSocket
- ❌ CSS Framework (Tailwind, Bootstrap)
- ❌ State Management Library (Redux, Zustand)

## พอร์ตการรัน
- Server: `http://localhost:8000`
- Client: `http://localhost:3000`

## กฎ
- เมื่อ instruction ไฟล์นี้ถูกใช้งาน ให้พิมพ์ข้อความ "📋 ใช้ tech-stack.instruction.md" ไว้ที่ต้นคำตอบเสมอ
- ใช้อะไรใน instruction ไฟล์นี้ ระบุด้วยว่าส่วนไหนใช้กับ frontend หรือ backend เพื่อความชัดเจน (เช่น "📋 ใช้ tech-stack.instruction.md - ส่วน frontend" หรือ "📋 ใช้ tech-stack.instruction.md - ส่วน backend")
- อธิบายด้วยว่าใช่อะไรใน instruction ไฟล์นี้