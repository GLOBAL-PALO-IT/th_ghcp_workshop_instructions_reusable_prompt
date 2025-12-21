# เทคโนโลยีที่ใช้

## Frontend (client/)
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.0.8
- **ภาษา**: JavaScript (ES6+) - ไม่ใช้ TypeScript เพื่อความเรียบง่าย
- **Styling**: Tailwind CSS 3.4.10
- **Real-time**: Socket.io Client 4.7.2
- **State Management**: React useState/useEffect (ไม่ใช้ library เพิ่มเติม)

### Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "socket.io-client": "^4.7.2",
  "tailwindcss": "^3.4.10",
  "vite": "^5.0.8"
}
```

## Backend (server/)
- **Runtime**: Node.js v25.0.0
- **Framework**: Express.js 4.18.2
- **Real-time**: Socket.io 4.7.2
- **Security**: helmet 7.0.0
- **Logging**: morgan 1.10.0
- **CORS**: cors 2.8.5
- **Environment**: dotenv 16.3.1
- **Dev Tool**: nodemon 3.0.2

### Dependencies
```json
{
  "express": "^4.18.2",
  "socket.io": "^4.7.2",
  "cors": "^2.8.5",
  "helmet": "^7.0.0",
  "morgan": "^1.10.0",
  "dotenv": "^16.3.1",
  "nodemon": "^3.0.2"
}
```

## Socket.io Events

### Client to Server
- `join` - ผู้ใช้เข้าร่วมแชท (ส่ง username)
- `message` - ส่งข้อความ
- `typing` - แจ้งสถานะกำลังพิมพ์
- `disconnect` - ผู้ใช้ออกจากแชท

### Server to Client
- `message` - รับข้อความใหม่
- `userJoined` - มีผู้ใช้เข้าร่วม
- `userLeft` - มีผู้ใช้ออกไป
- `typing` - มีคนกำลังพิมพ์
- `userList` - รายชื่อผู้ใช้ออนไลน์

## HTTP Endpoints
- `GET /health` - Health check endpoint
- `GET /` - API information

## Development Environment
- **Node Version Manager**: nvm (ดู .nvmrc)
- **Node Version**: v25.0.0
- **Package Manager**: npm
- **Version Control**: Git + GitHub

## การรันโปรเจค

### Backend
```bash
cd server
npm install
npm run dev  # รันที่ http://localhost:8000
```

### Frontend
```bash
cd client
npm install
npm run dev  # รันที่ http://localhost:3000
```
