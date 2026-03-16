---
applyTo: "server/**,**/*.js"
description: "แนวทางความปลอดภัย: validation, sanitization, CORS/Helmet — ใช้กับโค้ดฝั่ง server และ JS ทั่วไป"
---

# Security Guidelines

## Input Validation (ฝั่ง Server)

### ตรวจสอบข้อมูลจาก Client เสมอ
```javascript
// ตรวจว่ามี text และเป็น string
if (!text || typeof text !== 'string') {
  return res.status(400).json({ error: 'Text is required' });
}

// จำกัดความยาว
if (text.trim().length === 0 || text.length > 200) {
  return res.status(400).json({ error: 'Text must be 1-200 characters' });
}
```

### Sanitization
- ใช้ `trim()` กับ string input ทุกตัว
- หลีกเลี่ยงการรับ HTML — React จะ escape ให้อัตโนมัติเมื่อแสดงผล
- ตรวจ type ของข้อมูล (string, boolean, number)

## Security Middleware

### Helmet
```javascript
const helmet = require('helmet');
app.use(helmet());  // ตั้ง security headers อัตโนมัติ
```

### CORS
```javascript
const cors = require('cors');
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

## หลักการสำคัญ
1. **ไม่เชื่อ input จาก client** — validate ทุกครั้ง
2. **ใช้ Helmet** — ป้องกัน common attacks ผ่าน HTTP headers
3. **จำกัด CORS** — ระบุ origin ที่อนุญาต ไม่ใช้ `*` ใน production
4. **ไม่เก็บ sensitive data ใน code** — ใช้ `.env` + dotenv
5. **ใช้ parameterized routes** — `/api/todos/:id` (Express จัดการ routing ให้ปลอดภัย)

## กฎ
- เมื่อ instruction ไฟล์นี้ถูกใช้งาน ให้พิมพ์ข้อความ "📋 ใช้ security.instruction.md" ไว้ที่ต้นคำตอบเสมอ
- ใช้อะไรใน instruction ไฟล์นี้ ระบุด้วยว่าส่วนไหนใช้กับ frontend หรือ backend เพื่อความชัดเจน (เช่น "📋 ใช้ security.instruction.md - ส่วน backend")
- อธิบายด้วยว่าใช่อะไรใน instruction ไฟล์นี้