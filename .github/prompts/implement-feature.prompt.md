# /implement-feature — เพิ่มฟีเจอร์ Chat App (React + Socket.io)

วัตถุประสงค์: ช่วยออกแบบและลงมือเพิ่มฟีเจอร์แบบ end-to-end ให้ Real-time Chat Application โดยครอบคลุมทั้งฝั่งเซิร์ฟเวอร์ (Express + Socket.io) และฝั่งไคลเอนต์ (React + Vite + Tailwind)

ข้อกำหนดทั่วไป:
- ภาษาไทยทั้งหมด
- โค้ด JavaScript ไม่ใช้ TypeScript
- ยึดแนวทางใน `.github/instructions/` โดยเฉพาะ `tech-stack`, `code-style`, `security`
- เน้นโค้ดอ่านง่ายสำหรับผู้เริ่มต้น และ validate payload ทุก event

สิ่งที่ต้องส่งมอบเมื่อเรียกใช้ prompt:
- แผนงานสั้น ๆ เป็นขั้นตอน (server → client → UI)
- โค้ดตัวอย่างแบบ minimal ที่ต่อยอดได้ทันที
- คำอธิบายพอยต์สำคัญด้านความปลอดภัย (เช่น rate limiting, sanitize ข้อความ)
- วิธีทดสอบแบบเร็ว ๆ ใน dev environment

ตัวอย่างฟีเจอร์ที่รองรับ:
- เข้าร่วมห้อง (`join`) พร้อมอัปเดต `userList`
- ส่ง/รับข้อความ (`message`) พร้อม timestamp และ bubble UI
- สถานะกำลังพิมพ์ (`typing`) พร้อม debouncing
- สร้างหลายห้องแชท (rooms)
- เก็บประวัติข้อความฝั่ง server แบบ in-memory
- Rate limiting แบบง่ายต่อผู้ใช้

ข้อมูลที่ควรให้กับ Copilot ตอนเรียกใช้:
- คำอธิบายฟีเจอร์ที่ต้องการ (เช่น: เพิ่มห้องแยกด้วยชื่อ)
- โฟลเดอร์หรือไฟล์ที่เกี่ยวข้อง (เช่น `server/server.js`, `client/src/components/...`)
- ข้อจำกัด/เงื่อนไขเฉพาะ (เช่น ห้ามใช้ lib เพิ่ม)

คำใบ้ prompt (คัดลอกไปใช้ได้ทันที):
```
ช่วย implement ฟีเจอร์สำหรับ Chat App แบบ end-to-end โดยยึดตาม `.github/instructions/*`:
- ฟีเจอร์: [อธิบายฟีเจอร์ที่ต้องการ]
- Server: Express + Socket.io (validate payload, rate limiting แบบง่าย, CORS/Helmet)
- Client: React + Tailwind (จัด layout และ state ให้ชัดเจน)
- ส่งมอบ: แผนสั้น ๆ, โค้ดตัวอย่าง (server/client), วิธีทดสอบ และข้อควรระวังด้านความปลอดภัย
```
