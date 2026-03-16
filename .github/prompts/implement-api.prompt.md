---
description: "สร้าง REST API endpoints สำหรับ Todo CRUD — GET, POST, PUT, DELETE พร้อม validation"
---

# สร้าง REST API สำหรับ Todo App

## Endpoints ที่ต้องสร้าง

| Method | Endpoint | หน้าที่ | Response |
|--------|----------|---------|----------|
| GET | `/api/todos` | ดึง todo ทั้งหมด | 200 + array |
| POST | `/api/todos` | สร้าง todo ใหม่ | 201 + todo |
| PUT | `/api/todos/:id` | อัปเดต todo | 200 + todo |
| DELETE | `/api/todos/:id` | ลบ todo | 200 + todo |

## รูปแบบข้อมูล Todo
```json
{
  "id": 1,
  "text": "ซื้อของ",
  "completed": false,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

## Validation Rules
- `text`: ต้องเป็น string, ไม่ว่าง, trim, ไม่เกิน 200 ตัวอักษร
- `completed`: ต้องเป็น boolean
- `:id` ที่ไม่มีอยู่ → 404

## Data Store
- ใช้ in-memory array (ไม่ใช้ database)
- สร้างตัวแปร `let todos = []` และ `let nextId = 1`

อ้างอิง instructions: `security.instructions.md`, `code-style.instructions.md`
