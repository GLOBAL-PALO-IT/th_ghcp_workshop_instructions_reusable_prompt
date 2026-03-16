---
name: api-design
description: "REST API design สำหรับ Todo App — ใช้เมื่อต้องเพิ่ม endpoint ใหม่, ออกแบบ request/response format, เลือก HTTP method และ status code ที่ถูกต้อง, เพิ่ม validation ฝั่ง server, ทดสอบ API ด้วย curl. DO NOT USE FOR: สร้าง React component (→ react-patterns), เพิ่ม feature end-to-end (→ todo-features), code style/naming (→ instruction)."
---

# Skill: API Design — REST Patterns

## เมื่อไหร่ควรใช้ Skill นี้
- ต้องการเพิ่ม endpoint ใหม่ (เช่น filter, search, bulk delete)
- ไม่แน่ใจว่าควรใช้ GET/POST/PUT/DELETE ตัวไหน
- ต้องการเพิ่ม validation ให้ request body
- อยากทดสอบ API ด้วย curl

## ขั้นตอนเพิ่ม Endpoint ใหม่

```
1. เลือก HTTP Method (GET/POST/PUT/DELETE)
2. กำหนด URL path (/api/resource/:id)
3. กำหนด request body schema (ถ้ามี)
4. เพิ่ม input validation
5. เขียน business logic
6. return response + HTTP status code
7. ทดสอบด้วย curl
```

## HTTP Methods — เลือกอย่างไร

| ต้องการ | Method | URL | Body |
|---------|--------|-----|------|
| ดึงข้อมูล | GET | `/api/todos` | ไม่มี |
| สร้างใหม่ | POST | `/api/todos` | `{ text }` |
| แก้ไข | PUT | `/api/todos/:id` | `{ text?, completed? }` |
| ลบ | DELETE | `/api/todos/:id` | ไม่มี |

## HTTP Status Codes ที่ใช้บ่อย

| Code | ความหมาย | ใช้เมื่อ |
|------|----------|---------|
| 200 | OK | GET/PUT/DELETE สำเร็จ |
| 201 | Created | POST สร้างข้อมูลสำเร็จ |
| 400 | Bad Request | Input ไม่ถูกต้อง |
| 404 | Not Found | หา resource ไม่เจอ |
| 500 | Server Error | เกิด error ใน server |

## ดูเพิ่มเติม
- Endpoint reference → [endpoints.md](endpoints.md)
- คำสั่ง curl ทดสอบ → [test-commands.md](test-commands.md)

## เมื่อใช้งาน skill
  - ให้พิมพ์ "📋 ใช้ api-design" ไว้ที่ต้นคำตอบเสมอ
  - ระบุด้วยว่าใช้อะไรใน skill นี้ เช่น "📋 ใช้ api-design - ส่วน backend หัวข้อ CRUD"
  - อธิบายด้วยว่าใช่อะไรใน skill นี้ เช่น "ใช้ HTTP method PUT เพราะต้องการแก้ไขข้อมูลที่มีอยู่แล้ว, ใช้ status code 400 เมื่อ validation ไม่ผ่าน เพราะเป็น error ที่เกิดจากฝั่ง client"