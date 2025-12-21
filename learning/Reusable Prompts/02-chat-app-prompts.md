# Reusable Prompts — Real-time Chat App

เอกสารนี้รวบรวม prompt เทมเพลตสำหรับช่วยพัฒนาแอป Real-time Chat ด้วย React + Express + Socket.io ให้ปรับใช้ตามงานในโฟลเดอร์ `chat-app-tasks/`

## หลักการใช้งาน
- ภาษาไทยเท่านั้น (คำสั่ง/คำอธิบาย)
- โค้ด JavaScript ไม่ใช้ TypeScript
- Frontend ใช้ React + Vite + Tailwind CSS
- Backend ใช้ Express + Socket.io (Node v25 ผ่าน nvm)
- เน้นโค้ดอ่านง่ายสำหรับผู้เริ่มต้น

---

## 1) ตั้งค่าโครงโปรเจค
งานอ้างอิง: `task-1-project-structure.md`, `task-2-server-setup.md`, `task-3-react-setup.md`

Prompt:
```
ช่วยสร้างโครงสร้างโปรเจค Real-time Chat (client/server) ด้วย Vite + React + Tailwind และ Express + Socket.io โดยยึดตามสรุปใน `.github/copilot-instructions.md` และ `chat-app-tasks/task-1-project-structure.md` พร้อมคำสั่งติดตั้งและรันบน macOS (Node v25 ผ่าน nvm) โค้ดและคำอธิบายทั้งหมดเป็นภาษาไทย ไม่ใช้ TypeScript
```

---

## 2) Socket.io Server (events พื้นฐาน)
งานอ้างอิง: `task-4-socketio-server.md`

Prompt:
```
สร้าง Socket.io server ด้วย Express ที่รองรับ events: connection, join, message, typing, disconnect มีการ validate payload, อัพเดตรายชื่อผู้ใช้ออนไลน์ และ broadcast กลับไปยัง client ตามแนวทางใน `.github/instructions/security.instructions.md`
```

---

## 3) Broadcaster ข้อความ
งานอ้างอิง: `task-5-message-broadcasting.md`

Prompt:
```
เพิ่มโลจิกที่ server สำหรับรับ event `message` และ broadcast ให้ทุกคน พร้อมฝั่ง client ที่ฟัง event แล้วอัปเดตรายการข้อความแบบเรียลไทม์ ให้โค้ดอ่านง่าย ใช้ Tailwind สำหรับ UI ขั้นพื้นฐาน
```

---

## 4) Typing Indicators
งานอ้างอิง: `task-6-typing-indicators.md`

Prompt:
```
เพิ่มฟีเจอร์ typing indicator: ฝั่ง client ส่ง `typing` เมื่อผู้ใช้พิมพ์ และฟัง event เพื่อแสดงรายชื่อผู้ใช้ที่กำลังพิมพ์ รวมการ debouncing/การล้างสถานะเมื่อหยุดพิมพ์ ตามแนวทาง security + validation
```

---

## 5) โครง React App
งานอ้างอิง: `task-7-react-app-component.md`

Prompt:
```
สร้างโครง React App ด้วย Functional Components: `App.jsx`, `JoinForm.jsx`, `ChatRoom.jsx`, `MessageList.jsx`, `MessageInput.jsx` พร้อม state หลัก, การเชื่อมต่อ socket, และการส่ง/รับ events ให้ใช้ Tailwind ในการจัด layout พื้นฐาน
```

---

## 6) Join Form Component
งานอ้างอิง: `task-8-join-form-component.md`

Prompt:
```
สร้างคอมโพเนนต์ `JoinForm.jsx` สำหรับกรอกชื่อผู้ใช้และส่ง event `join` ไปที่ server มีการ validate ชื่อผู้ใช้ (trim, ความยาว), ป้องกันช่องว่าง และแสดง error อย่างเหมาะสม
```

---

## 7) Chat Room Layout
งานอ้างอิง: `task-9-chat-room-layout.md`

Prompt:
```
จัด layout ห้องแชทด้วย Tailwind: ส่วนแสดงข้อความ (เลื่อนอัตโนมัติท้ายรายการ), แถบผู้ใช้ออนไลน์, อินพุตพิมพ์ข้อความ และแถบสถานะกำลังพิมพ์ ให้ UI เรียบง่ายเหมาะสำหรับผู้เริ่มต้น
```

---

## 8) Message Display Components
งานอ้างอิง: `task-10-message-display-components.md`

Prompt:
```
สร้าง/ปรับปรุง `MessageList.jsx` และ `MessageInput.jsx` ให้รองรับ timestamp, การจัด bubble, และการแสดงชื่อผู้ส่ง พร้อมการจัดการ state/props ที่ชัดเจน
```

---

## 9) Code Review (Socket events)
Prompt:
```
รีวิวโค้ดเซิร์ฟเวอร์ Socket.io: ตรวจสอบ validation ของ payload, อันตรายด้าน security (เช่น spam, XSS), ชื่อ event และการจัดการ disconnect พร้อมข้อเสนอแนะที่ทำได้ทันที
```

---

## 10) Debug / Bug Fix
Prompt:
```
ช่วย debug ปัญหา: ผู้ใช้ไม่ปรากฏใน `userList` หลังเข้าร่วม และ event `typing` ไม่หยุดเมื่อเคอร์เซอร์ออกจากช่อง ให้วิเคราะห์สาเหตุและเสนอการแก้ไขแบบขั้นตอน พร้อมโค้ดตัวอย่าง
```

---

## 11) เสริมความปลอดภัยขั้นพื้นฐาน
Prompt:
```
เพิ่มการป้องกันพื้นฐานฝั่ง server: CORS + Helmet, rate limiting ต่อผู้ใช้ใน window 3 วินาที, และ sanitize ข้อความก่อน broadcast โดยไม่ใช้ฐานข้อมูล ให้โค้ดกระชับและอธิบายสั้น ๆ เป็นภาษาไทย
```
