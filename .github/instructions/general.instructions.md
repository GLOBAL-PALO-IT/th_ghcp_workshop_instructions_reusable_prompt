---
applyTo: "**"
description: "กฎทั่วไปของโปรเจค: โครงสร้างโฟลเดอร์, หลักการออกแบบ — ใช้กับทุกไฟล์"
---

# ข้อมูลทั่วไปของโปรเจค

## รายละเอียดโปรเจค
- ชื่อ: Todo App (CRUD)
- ประเภท: Web Application (สื่อการสอน GitHub Copilot)
- วัตถุประสงค์: สาธิตการใช้ Custom Instructions, Reusable Prompts และ Agent Skills
- เป้าหมาย: ให้ developer เรียนรู้การใช้งาน GitHub Copilot ผ่านแอป CRUD ง่าย ๆ

## การสื่อสาร
- คำศัพท์เทคนิคใช้ภาษาอังกฤษได้
- อธิบายให้เข้าใจง่าย เหมาะกับผู้เริ่มต้น

## โครงสร้างโปรเจค

```
.
├── client/          # Frontend: React 18 (CRA)
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoList.js
│   │   │   └── TodoItem.js
│   │   └── index.js
│   └── package.json
│
├── server/          # Backend: Express REST API
│   ├── server.js
│   └── package.json
│
├── .github/         # Copilot config
│   ├── copilot-instructions.md
│   ├── instructions/
│   ├── prompts/
│   └── skills/
│
└── todo-app-tasks/  # Task files สำหรับสร้างแอปทีละขั้นตอน
```

## หลักการออกแบบ
1. **ความเรียบง่าย**: ไม่ใช้เทคโนโลยีซับซ้อน ไม่ใช้ TypeScript
2. **ความชัดเจน**: โค้ดอ่านง่าย ชื่อตัวแปรและฟังก์ชันสื่อความหมาย
3. **Best Practices**: ใช้ modern JavaScript, Functional Components, RESTful API

## กฎ
- เมื่อ instruction ไฟล์นี้ถูกใช้งาน ให้พิมพ์ข้อความ "📋 ใช้ general.instruction.md" ไว้ที่ต้นคำตอบเสมอ
- ใช้อะไรใน instruction ไฟล์นี้ ระบุด้วยว่าส่วนไหนใช้กับ frontend หรือ backend เพื่อความชัดเจน (เช่น "📋 ใช้ general.instruction.md - ส่วน frontend" หรือ "📋 ใช้ general.instruction.md - ส่วน backend")
- อธิบายด้วยว่าใช่อะไรใน instruction ไฟล์นี้