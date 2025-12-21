# แนวทางความปลอดภัย

**หมายเหตุ**: โปรเจคนี้เป็นสื่อการสอน จึงไม่มี authentication และความปลอดภัยระดับ production แต่ยังคงมี best practices พื้นฐาน

## Data Validation

### Client-side (React)
- ตรวจสอบ input ก่อนส่งไป server
- ป้องกันการส่งข้อมูลว่าง
````instructions
# แนวทางความปลอดภัย (Real-time Chat)

หมายเหตุ: โปรเจคนี้เป็นสื่อการสอน จึงไม่มี authentication ระดับ production แต่ควรยึดหลักพื้นฐานเพื่อป้องกันปัญหาทั่วไป

## การตรวจสอบข้อมูล (Validation)

### ฝั่ง Client (React)
- ตรวจสอบ/ตัดช่องว่างก่อนส่งข้อความ
- จำกัดความยาวข้อความ เช่น 500 ตัวอักษร

```javascript
const handleSend = (e) => {
  e.preventDefault()
  const text = input.trim().slice(0, 500)
  if (!text) return
  socket.emit('message', { username, text, timestamp: Date.now() })
}
```

### ฝั่ง Server (Express + Socket.io)
- ตรวจสอบชนิดข้อมูลทุก event (`string`, `boolean`, ฯลฯ)
- จำกัดความยาวและทำการ sanitize สำหรับข้อความ
- ปฏิเสธ payload ที่ไม่ตรงสเปคทันที

```javascript
io.on('connection', (socket) => {
  socket.on('message', ({ username, text, timestamp }) => {
    if (typeof text !== 'string') return
    const safeText = text.trim().slice(0, 500)
    if (!safeText) return
    io.emit('message', {
      username: typeof username === 'string' ? username.trim() : socket.data.username,
      text: safeText,
      timestamp: typeof timestamp === 'number' ? timestamp : Date.now()
    })
  })
})
```

## จำกัดความถี่การส่ง (Rate Limiting แบบง่าย)
- ป้องกัน spam โดยจำกัดจำนวนข้อความต่อช่วงเวลา
- ใช้หน่วยความจำในตัว (per-socket) สำหรับสื่อการสอน

```javascript
const MESSAGE_LIMIT = 8
const WINDOW_MS = 3000

io.on('connection', (socket) => {
  let sent = [] // timestamps

  socket.on('message', (payload) => {
    const now = Date.now()
    sent = sent.filter((t) => now - t < WINDOW_MS)
    if (sent.length >= MESSAGE_LIMIT) return // drop
    sent.push(now)
    // validate + broadcast ตามตัวอย่างด้านบน
  })
})
```

## CORS และ Security Headers

```javascript
const cors = require('cors')
const helmet = require('helmet')

app.use(helmet())
app.use(cors({ origin: 'http://localhost:5173' }))
```

## รายการ event ที่อนุญาต (Allowlist)
- จัดการเฉพาะ event ที่กำหนด: `join`, `message`, `typing`, `disconnect`
- ไม่เรียก `socket.onAny()` แบบเปิดกว้างโดยไม่ตรวจสอบ

## การจัดการ Error
- ไม่ส่งรายละเอียดภายใน (stack) กลับไป client
- Log แบบกระชับเพื่อ debug

```javascript
io.on('connection', (socket) => {
  socket.on('join', (payload) => {
    try {
      // validate + เข้าร่วม
    } catch (err) {
      console.error('join error:', err.message)
    }
  })
})
```

## การป้องกัน XSS
- ฝั่ง Client: แสดงข้อความเป็น text เท่านั้น ไม่ render HTML ที่ผู้ใช้ส่งมา
- ฝั่ง Server: sanitize/ตัดข้อความ ไม่ส่ง markup กลับ

## Best Practices สำหรับ production
1. **Authentication & Authorization**: JWT/Session, จำกัดสิทธิ์การส่ง event
2. **Rate Limiting ที่เสถียร**: Redis/Token bucket ต่อผู้ใช้/ห้อง
3. **HTTPS**: บังคับใช้ SSL/TLS
4. **Environment Variables**: เก็บ secrets ใน `.env`
5. **Validation Library**: เช่น `zod`, `joi`
6. **Monitoring/Logging**: เพิ่มเครื่องมือเช่น Winston, PM2
7. **Scaling Socket.io**: ใช้ adapter (Redis) เมื่อมีหลาย instance

````
