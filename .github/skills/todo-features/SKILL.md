---
name: todo-features
description: "CRUD workflow สำหรับ Todo App — ใช้เมื่อต้องเพิ่ม/แก้ไข/ลบ feature ของ Todo, วางแผนขั้นตอนการทำ CRUD end-to-end (API + UI + state), แก้ปัญหา state ไม่อัปเดตหลัง API call, ดูตัวอย่างโค้ด CRUD. DO NOT USE FOR: สร้าง component ใหม่ (→ react-patterns), ออกแบบ API endpoint (→ api-design), naming convention (→ instruction), scaffold ทั้งแอป (→ prompt)."
---

# Skill: Todo Features — CRUD Workflow

## เมื่อไหร่ควรใช้ Skill นี้
- ต้องการเพิ่ม feature ใหม่ให้ Todo App (เช่น filter, search, priority)
- ต้องการแก้ไข CRUD ที่มีอยู่ (เช่น เปลี่ยนวิธี edit)
- state ไม่อัปเดตหลังเรียก API
- ไม่แน่ใจว่าต้องแก้ไฟล์ไหนบ้างเมื่อเพิ่ม feature

## ขั้นตอนเพิ่ม Feature ใหม่ (End-to-End)

```
1. เพิ่ม field ใน data model (server.js → todo object)
2. เพิ่ม/แก้ API endpoint (server.js → route handler)
3. เพิ่ม API call ใน App.js (fetch function)
4. ส่ง handler ผ่าน props ไปยัง component
5. สร้าง/แก้ UI ใน component ที่เกี่ยวข้อง
6. ทดสอบ: API → UI → state update
```

## ไฟล์ที่ต้องแก้เมื่อเพิ่ม CRUD Feature

| ขั้นตอน | ไฟล์ | สิ่งที่ทำ |
|---------|------|----------|
| Data Model | `server/server.js` | เพิ่ม field ใน todo object |
| API | `server/server.js` | เพิ่ม/แก้ route handler |
| State + Fetch | `client/src/App.js` | เพิ่ม handler function + ส่ง props |
| UI | `client/src/components/` | แก้ component ที่แสดงผล |

## ดูเพิ่มเติม
- ตัวอย่างโค้ด CRUD → [examples.md](examples.md)
- ปัญหาที่พบบ่อย → [common-bugs.md](common-bugs.md)

## เมื่อใช้งาน skill
  - ให้พิมพ์ "📋 ใช้ todo-features" ไว้ที่ต้นคำตอบเสมอ
  - ระบุด้วยว่าใช้อะไรใน skill นี้ เช่น "📋 ใช้ todo-features - เพิ่ม feature filter by status"
  - อธิบายด้วยว่าใช่อะไรใน skill นี้ เช่น "เพิ่ม field `status` ใน data model, เพิ่ม route handler `GET /api/todos?status=completed`, เพิ่มฟังก์ชัน fetch ใน App.js เพื่อดึงข้อมูลตาม status, แก้ไข TodoList component เพื่อแสดงผลตาม filter ที่เลือก"
