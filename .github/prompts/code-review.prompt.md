# /code-review — รีวิวโค้ด Chat App (React + Socket.io)

วัตถุประสงค์: ตรวจสอบคุณภาพโค้ดและความปลอดภัยของ Real-time Chat Application ทั้งฝั่งเซิร์ฟเวอร์ (Express + Socket.io) และฝั่งไคลเอนต์ (React + Vite + Tailwind)

โฟกัสการรีวิว:
- การจัดการ Socket.io events: `join`, `message`, `typing`, `disconnect`
- Validation ของ payload (ชนิดข้อมูล, การ trim, ความยาว)
- ความปลอดภัย: ป้องกัน spam (rate limiting แบบง่าย), XSS (ไม่ render HTML จากผู้ใช้), CORS/Helmet
- โครงสร้างคอมโพเนนต์ React: single responsibility, การจัดการ state, cleanup ของ socket handlers
- ประสบการณ์ใช้งาน: auto-scroll, แสดง error states, การ debounce/throttle

สิ่งที่ต้องส่งมอบเมื่อเรียกใช้ prompt:
- รายการปัญหาแบบเรียงลำดับความสำคัญ (High → Medium → Low)
- คำแนะนำการแก้ไขที่ทำได้ทันทีพร้อมตัวอย่างแพตช์โค้ดสั้น ๆ
- ความเสี่ยง/ผลกระทบและเหตุผลประกอบ (เช่น memory leak จากการไม่ off event handlers)
- เช็กลิสต์สำหรับตรวจเองในอนาคต

คำใบ้ prompt (คัดลอกไปใช้ได้ทันที):
```
ช่วยรีวิวโค้ด Chat App เน้น Socket.io + React โดยดู:
- validation payload, ความปลอดภัย (rate limiting, XSS), CORS/Helmet
- โครงสร้างคอมโพเนนต์, cleanup ของ event handlers
- UX: auto-scroll, error states, typing debounce
ส่งมอบ: รายการปัญหาเรียงความสำคัญ + แนวทางแก้พร้อมแพตช์ตัวอย่าง
```
