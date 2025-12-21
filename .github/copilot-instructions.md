# Project Instructions

เอกสารนี้รวบรวม instructions ทั้งหมดของโปรเจค

## สารบัญ
- ข้อมูลทั่วไป: ดูที่ `instructions/general.instructions.md`
- เทคโนโลยี: ดูที่ `instructions/tech-stack.instructions.md`
- รูปแบบโค้ด: ดูที่ `instructions/code-style.instructions.md`
- ความปลอดภัย: ดูที่ `instructions/security.instructions.md`

## สรุปสั้นๆ

### ภาษา
- ตอบเป็นภาษาไทยเท่านั้น
- สรุปข้อมูลลงไฟล์ README.KNOWLEDGE.MD เสมอ

### โปรเจค Real-time Chat Application

#### เทคโนโลยี
- **Frontend**: React 18 (JavaScript, ไม่ใช้ TypeScript) + Vite + Tailwind CSS
- **Backend**: Express.js + Socket.io + Node.js
- **Real-time**: Socket.io (WebSocket)
- **Node Version**: v25.0.0 (ใช้ nvm)

#### โครงสร้างโปรเจค
```
client/          # Frontend React + Tailwind + Socket.io Client
server/          # Backend Express + Socket.io Server
```

#### การเขียนโค้ด
- **Frontend**: ใช้ Functional Components, React Hooks (useState, useEffect), Socket.io Client
- **Backend**: ใช้ async/await, Express middleware, Socket.io event handlers
- **Real-time Communication**: Socket.io events (connection, message, typing, disconnect)
- **Style**: Tailwind CSS utility classes

#### หลักการ
- โค้ดง่าย อ่านเข้าใจง่าย สำหรับ developer ใหม่
- ไม่ใช้ TypeScript (เน้นความเรียบง่าย)
- เน้นการสื่อสารแบบ real-time ด้วย WebSocket
- โปรเจคนี้เป็นสื่อการสอนเกี่ยวกับ GitHub Copilot Instructions & Reusable Prompts

สำหรับรายละเอียดเพิ่มเติม ดูในไฟล์แต่ละหมวดหมู่