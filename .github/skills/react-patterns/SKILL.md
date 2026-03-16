---
name: react-patterns
description: "React component patterns สำหรับ Todo App — ใช้เมื่อต้องตัดสินใจว่า state ควรอยู่ที่ไหน, จัดการ form input, ส่ง props/callback ระหว่าง component, แก้ปัญหา re-render หรือ component ไม่แสดงผลตามที่คาด. DO NOT USE FOR: เพิ่ม CRUD feature end-to-end (→ todo-features), ออกแบบ API (→ api-design), naming convention หรือ code style (→ instruction)."
---

# Skill: React Patterns — Component Workflow

## เมื่อไหร่ควรใช้ Skill นี้
- ไม่แน่ใจว่า state ควรอยู่ที่ component ไหน
- ต้องการจัดการ form (controlled input, submit, validation)
- มีปัญหา props ส่งไม่ถึง หรือ callback ไม่ทำงาน
- อยากแยก component แต่ไม่รู้ว่าควรแบ่งแบบไหน

## Decision Tree: State อยู่ที่ไหน?

```
ข้อมูลนี้ใช้กี่ component?
├── 1 component → useState ใน component นั้น
│   เช่น: editText ใน TodoItem (ใช้แค่ตอน edit)
│
└── หลาย component → ยก state ขึ้นไป parent
    เช่น: todos array ใน App.js (ใช้ทั้ง TodoList + TodoForm)
    
    ส่งข้อมูลลงมา → props
    ส่งการเปลี่ยนแปลงขึ้นไป → callback function
```

## Component แบ่งหน้าที่

| Component | หน้าที่ | State |
|-----------|---------|-------|
| `App` | เก็บ todos, เรียก API, ส่ง props | `todos`, `loading`, `error` |
| `TodoForm` | รับ input, เรียก `onAdd` | `text` (local) |
| `TodoList` | วนแสดง TodoItem | ไม่มี |
| `TodoItem` | แสดง/แก้ไข/ลบ todo | `isEditing`, `editText` (local) |

## ดูเพิ่มเติม
- Patterns พร้อมโค้ดตัวอย่าง → [patterns.md](patterns.md)
- Checklist ก่อนสร้าง component → [checklist.md](checklist.md)

## เมื่อใช้งาน skill
    - ให้พิมพ์ "📋 ใช้ react-patterns" ไว้ที่ต้นคำตอบเสมอ
    - ระบุด้วยว่าใช้อะไรใน skill นี้ เช่น "📋 ใช้ react-patterns - จัดการ form input ใน TodoForm"
    - อธิบายด้วยว่าใช่อะไรใน skill นี้ เช่น "ใช้ useState ใน TodoForm เพื่อเก็บค่า text ที่ผู้ใช้พิมพ์, ส่ง callback onAdd ไปยัง App เพื่อเพิ่ม todo ใหม่เมื่อ submit form, แยก state ของ form กับ state ของ todos ใน App เพื่อให้ component แต่ละตัวมีความรับผิดชอบชัดเจน"