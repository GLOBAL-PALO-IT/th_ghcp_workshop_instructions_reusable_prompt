---
description: "สร้างโครงสร้างโปรเจค Todo App ตั้งแต่ต้น — สร้างโฟลเดอร์ server/ และ client/ พร้อม dependencies"
---

# สร้างโครงสร้างโปรเจค Todo App

## สิ่งที่ต้องทำ

### 1. สร้าง Server (Express)
- สร้างโฟลเดอร์ `server/`
- สร้าง `package.json` พร้อม dependencies: express, cors, helmet, morgan, dotenv
- สร้าง `.env` กำหนด PORT=8000 และ CLIENT_URL
- สร้าง `server.js` ว่าง ๆ พร้อม middleware พื้นฐาน

### 2. สร้าง Client (React CRA)
- สร้างโฟลเดอร์ `client/` ด้วย Create React App
- ลบไฟล์ที่ไม่จำเป็นออก (logo, test files)
- สร้างโฟลเดอร์ `src/components/`

### 3. ตรวจสอบ
- รัน `npm install` ทั้ง server และ client
- ตรวจว่า server รันได้ที่ port 8000
- ตรวจว่า client รันได้ที่ port 3000

อ้างอิง instructions: `general.instructions.md`, `tech-stack.instructions.md`
