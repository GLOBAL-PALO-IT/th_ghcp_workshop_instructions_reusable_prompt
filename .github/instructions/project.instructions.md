---
applyTo: "**"
description: "ภาพรวมโปรเจค: สถาปัตยกรรม, CRUD features, API endpoints, วิธีรันและทดสอบ — ใช้กับทุกไฟล์"
---

# Project Overview — Todo App (CRUD)

## สถาปัตยกรรม
```
Client (React 18, port 3000)
  ↕  HTTP REST API (fetch)
Server (Express, port 8000)
  ↕  In-memory Array
Data Store (ไม่มี database)
```

## CRUD Features
| Feature | Method | Endpoint | หน้าที่ |
|---------|--------|----------|---------|
| อ่านทั้งหมด | GET | `/api/todos` | ดึง todo ทั้งหมด |
| สร้าง | POST | `/api/todos` | เพิ่ม todo ใหม่ |
| แก้ไข | PUT | `/api/todos/:id` | อัปเดต text หรือ status |
| ลบ | DELETE | `/api/todos/:id` | ลบ todo |

## รูปแบบข้อมูล Todo
```json
{
  "id": 1,
  "text": "ซื้อของ",
  "completed": false,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

## วิธีรัน

### Server
```bash
cd server
npm install
npm run dev     # development (nodemon)
npm start       # production
```

### Client
```bash
cd client
npm install
npm start       # เปิดที่ http://localhost:3000
```

### ตรวจสอบ Server
```bash
curl http://localhost:8000/health
# → { "status": "ok" }
```

## Component Structure
```
App.js              ← state หลัก + fetch API
├── TodoForm.js     ← ฟอร์มเพิ่ม todo
└── TodoList.js     ← แสดงรายการ
    └── TodoItem.js ← todo แต่ละรายการ (toggle/edit/delete)
```

## Data Flow
1. `App.js` โหลด todos จาก API ด้วย `useEffect`
2. ผู้ใช้พิมพ์ใน `TodoForm` → เรียก `POST /api/todos`
3. `TodoList` วนแสดง `TodoItem` แต่ละตัว
4. คลิก checkbox → `PUT /api/todos/:id` (toggle completed)
5. คลิกลบ → `DELETE /api/todos/:id`

## กฎ
- เมื่อ instruction ไฟล์นี้ถูกใช้งาน ให้พิมพ์ข้อความ "📋 ใช้ project.instruction.md" ไว้ที่ต้นคำตอบเสมอ
- ใช้อะไรใน instruction ไฟล์นี้ ระบุด้วยว่าส่วนไหนใช้กับ frontend หรือ backend เพื่อความชัดเจน (เช่น "📋 ใช้ project.instruction.md - ส่วน frontend" หรือ "📋 ใช้ project.instruction.md - ส่วน backend")
- อธิบายด้วยว่าใช่อะไรใน instruction ไฟล์นี้