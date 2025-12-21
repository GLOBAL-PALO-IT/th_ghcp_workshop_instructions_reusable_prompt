# README.KNOWLEDGE.MD

## วัตถุประสงค์

Repository นี้จัดทำขึ้นเพื่อเป็น**สื่อการสอน**เรื่องการใช้งาน **GitHub Copilot Instructions** และ **Reusable Prompts** 

เป้าหมาย:
- สอนวิธีการสร้างและใช้งาน Custom Instructions สำหรับ GitHub Copilot
- แสดงตัวอย่างและ Best Practices ในการเขียน Reusable Prompts
- เป็น Reference และ Template สำหรับนำไปประยุกต์ใช้จริง

## โครงสร้าง Repository

```
.
├── Custom Instructions/    # ตัวอย่าง Custom Instructions ตามหัวข้อการสอน
├── Reusable Prompts/       # ตัวอย่าง Reusable Prompts Templates
├── .github/                # GitHub Copilot configuration
└── README.KNOWLEDGE.MD     # เอกสารนี้ (Knowledge Notes)
```

---

## แผนการสอน (Teaching Plan)

### หัวข้อพื้นฐาน
1. **GitHub Copilot Instructions คืออะไร** - แนวคิด วัตถุประสงค์ และประโยชน์
   - Conceptual: คำนิยาม, ทำไมต้องใช้, แนวคิดหลัก
   - Technical: ทำงานอย่างไร, อยู่ที่ไหน, Copilot อ่านและใช้งานอย่างไร
   - 📄 [Custom Instructions/01-what-is-copilot-instructions.md](Custom%20Instructions/01-what-is-copilot-instructions.md)
2. **ความแตกต่างระหว่าง Instructions กับ Prompts** - เมื่อไหร่ควรใช้อะไร
   - Instructions vs Prompts คืออะไร
   - Use Cases สำหรับ Instructions
   - Use Cases สำหรับ Prompts
   - กรณีที่ควรใช้ร่วมกัน
   - 📄 [Custom Instructions/02-instructions-vs-prompts.md](Custom%20Instructions/02-instructions-vs-prompts.md)
3. **วิธีการสร้าง Custom Instructions** - โครงสร้างไฟล์ และไวยากรณ์
   - วิธีที่ 1: Single File (copilot-instructions.md)
   - วิธีที่ 2: Multiple Files (แยก Folder)
   - การเปรียบเทียบและเลือกใช้
   - 📄 [Custom Instructions/03-how-to-create-instructions.md](Custom%20Instructions/03-how-to-create-instructions.md)
4. **วิธีการสร้าง Reusable Prompts** - โครงสร้างและการใช้งาน
   - Reusable Prompts คืออะไร
   - โครงสร้างไฟล์และการตั้งชื่อ
   - วิธีสร้างและจัดเก็บ
   - ตัวอย่างการใช้งานจริง
   - 📄 [Reusable Prompts/01-how-to-create-prompts.md](Reusable%20Prompts/01-how-to-create-prompts.md)

### การเขียน Instructions
5. **หลักการเขียน Instructions ที่ดี** - Best practices และสิ่งที่ควรหลีกเลี่ยง
6. **การกำหนด Rules และ Context** - การควบคุมพฤติกรรม AI
7. **การกำหนด Output Format** - Markdown, Code style, Language
8. **Scope ของ Instructions** - Repository-level vs Project-level

### Reusable Prompts
9. **แนวคิดของ Reusable Prompts** - การสร้าง template ที่ใช้ซ้ำได้
10. **โครงสร้างของ Prompt ที่ดี** - Context, Task, Constraints, Expected Output
11. **การจัดหมวดหมู่ Prompts** - แยกตาม use case (code review, documentation, refactoring, etc.)

### Use Cases จริง
12. **Code Review Assistant** - Instructions สำหรับตรวจโค้ด
13. **Documentation Writer** - สร้างเอกสารอัตโนมัติ
14. **Test Generator** - สร้าง unit tests
15. **Refactoring Helper** - ช่วยปรับปรุงโค้ด
16. **API Documentation** - สร้าง API docs
17. **Error Handler** - แนะนำการจัดการ errors

### ขั้นสูง
18. **Chain of Prompts** - การเชื่อมโยง prompts หลายขั้นตอน
19. **Context Management** - การจัดการข้อมูล context อย่างมีประสิทธิภาพ
20. **Version Control** - การจัดการเวอร์ชันของ instructions
21. **Team Collaboration** - การใช้งานร่วมกันในทีม

### เทคนิคเพิ่มเติม
22. **Performance Optimization** - ทำให้ instructions ทำงานได้เร็วขึ้น
23. **Debugging Instructions** - วิธีแก้ไขเมื่อ instructions ไม่ทำงานตามที่ตั้งใจ
24. **Security & Privacy** - การป้องกันข้อมูลสำคัญ

---

*Last updated: December 18, 2025*

---

## ส่วนสรุปโปรเจค: React Chat App (เพิ่มฟีเจอร์ end-to-end)

- โครงสร้างโปรเจค: ดูโฟลเดอร์ [react-chat-app](react-chat-app)
   - Root: [react-chat-app/package.json](react-chat-app/package.json), [react-chat-app/.gitignore](react-chat-app/.gitignore), [react-chat-app/README.md](react-chat-app/README.md)
   - Server: [react-chat-app/server/server.js](react-chat-app/server/server.js), [react-chat-app/server/package.json](react-chat-app/server/package.json), [react-chat-app/server/.env](react-chat-app/server/.env)
   - Client: [react-chat-app/client/src/App.jsx](react-chat-app/client/src/App.jsx), [react-chat-app/client/src/components/JoinForm.jsx](react-chat-app/client/src/components/JoinForm.jsx), [react-chat-app/client/src/components/ChatRoom.jsx](react-chat-app/client/src/components/ChatRoom.jsx)

- ฟีเจอร์ที่เพิ่ม:
   - เข้าร่วมห้อง (`join`) พร้อมอัปเดต `userList` และส่งประวัติข้อความใน-memory
   - ส่ง/รับข้อความ (`message`) พร้อม `timestamp` และ bubble UI ฝั่ง client
   - สถานะกำลังพิมพ์ (`typing`) แบบ debouncing/throttling
   - รองรับหลายห้อง (สร้างตามชื่อเมื่อเข้าร่วม)
   - เก็บประวัติข้อความฝั่ง server แบบ in-memory (trim อัตโนมัติ)
   - Rate limiting แบบง่ายต่อผู้ใช้ (message 5/3วิ, typing 10/3วิ)

- ความปลอดภัย:
   - Sanitize ข้อความทั้ง server/client (ป้องกัน XSS เบื้องต้น)
   - Validation payload ทุก event (`username`, `room`, `message` มีรูปแบบและความยาวที่กำหนด)
   - ใช้ `helmet`, `cors` และ `morgan` สำหรับ security/logging
   - CORS อ้างอิงจาก `.env` (`CLIENT_URL`)

- วิธีรันและทดสอบอย่างเร็ว:
   - ติดตั้ง: ใน [react-chat-app](react-chat-app) รันคำสั่ง `npm run install-all`
   - รัน dev พร้อมกัน: `npm run dev`
   - ตรวจ API: `http://localhost:8000/health` และหน้าเว็บ `http://localhost:3000`
   - เปิด 2 แท็บ เข้าห้องเดียวกัน ส่งข้อความ/พิมพ์ดูผล real-time และ rate limit

- Environment ที่ใช้:
   - [react-chat-app/server/.env](react-chat-app/server/.env): `NODE_ENV`, `PORT=8000`, `CLIENT_URL=http://localhost:3000`

---

## สรุป Copilot Instructions ล่าสุด (Dec 22, 2025)

- ภาพรวม: ใช้ Express + Socket.io ที่ `server/` และ React 18 (JS, ไม่ใช้ TS) ที่ `client/`, อ้างอิงขั้นตอนใน [chat-app-tasks/README.md](chat-app-tasks/README.md).
- การรัน: Server พอร์ต 8000 (`npm run dev`/`npm start`), Client CRA พอร์ต 3000 (`npm start`) หรือถ้าเป็น Vite ใช้ 5173 (`npm run dev`). Health check: `http://localhost:8000/health`.
- Node version: เริ่มต้นใช้ v25 ผ่าน `nvm`; หากพบ dependency native (เช่น `better-sqlite3` ในเอกสาร Todo Web App) ให้สลับเป็น v20 ตาม [README.md](README.md#L24-L49).
- CORS/ENV: ตั้ง `CLIENT_URL=http://localhost:3000` ใน `.env` ฝั่ง server และส่ง option `cors` ให้ `io(...)`. ดู [task-2-server-setup.md](chat-app-tasks/task-2-server-setup.md#L1).
- รูปแบบข้อความ: `{ id, username, message, timestamp, type }` พร้อม sanitize และจำกัดประวัติ in‑memory 100 รายการ ตาม [task-5-message-broadcasting.md](chat-app-tasks/task-5-message-broadcasting.md#L1).
- Events หลัก: `join`, `message`, `typing_start`, `typing_stop`, `disconnect` และ broadcast `userList`/`messageHistory`. ดู [task-4-socketio-server.md](chat-app-tasks/task-4-socketio-server.md#L1) และ [task-6-typing-indicators.md](chat-app-tasks/task-6-typing-indicators.md#L1).
- ข้อควรระวัง: โฟลเดอร์มี zero‑width space ทำให้ `npm install` ล้มเหลว — แก้ตามขั้นตอนใน [README.md](README.md#L5-L23). สำหรับงาน chat ให้ยึดตาม `chat-app-tasks/*` เป็นหลัก (CRA + port 3000, Server 8000).
