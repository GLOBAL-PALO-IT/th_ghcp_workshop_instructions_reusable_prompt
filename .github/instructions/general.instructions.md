# ข้อมูลทั่วไปของโปรเจค

## รายละเอียดโปรเจค
- ชื่อ: Real-time Chat Application
- ประเภท: Real-time Web Application (สื่อการสอน GitHub Copilot)
- วัตถุประสงค์: สาธิตการใช้ Custom Instructions และ Reusable Prompts กับแอป real-time
- เป้าหมาย: ให้ developer ใหม่เรียนรู้การใช้งาน GitHub Copilot และ WebSocket

## การสื่อสาร
- ตอบเป็นภาษาไทยเท่านั้น
- คำศัพท์เทคนิคใช้ภาษาอังกฤษ
- อธิบายให้เข้าใจง่าย เหมาะกับผู้เริ่มต้น
- โค้ดต้องอ่านง่าย มี comments เมื่อจำเป็น

## โครงสร้างโปรเจค
```
.
├── client/          # Frontend: React + Vite + Tailwind + Socket.io Client
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── JoinForm.jsx
│   │   │   ├── ChatRoom.jsx
│   │   │   ├── MessageList.jsx
│   │   │   └── MessageInput.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/          # Backend: Express + Socket.io
│   ├── server.js
│   └── package.json
│
├── .github/         # Copilot Instructions & Prompts
│   ├── copilot-instructions.md
│   ├── instructions/
│   └── prompts/
│
└── chat-app-tasks/  # Task files สำหรับสร้างแอปทีละขั้นตอน
```

## หลักการออกแบบ
1. **ความเรียบง่าย**: ไม่ใช้เทคโนโลยีซับซ้อน ไม่ใช้ TypeScript
2. **ความชัดเจน**: โค้ดอ่านง่าย ชื่อตัวแปรและฟังก์ชันสื่อความหมาย
3. **Best Practices**: ใช้ modern JavaScript, Functional Programming, RESTful API
