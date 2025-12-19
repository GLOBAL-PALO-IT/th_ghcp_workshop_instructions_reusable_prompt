# วิธีรัน Todo Web App

## ⚠️ ปัญหา: Path มีอักขระพิเศษ

Folder name มีอักขระพิเศษ (zero-width space) ที่ทำให้ npm install ไม่สำเร็จ

## 🔧 วิธีแก้ไข

### วิธีที่ 1: เปลี่ยนชื่อ Folder (แนะนำ)

```bash
# ไปที่ parent folder
cd ~/repository/ghcp

# เปลี่ยนชื่อ folder ให้ไม่มีอักขระพิเศษ
mv "Custom Instruction & Reuseable Prompt<200b>" "custom-instructions"

# เข้า folder ใหม่
cd custom-instructions
```

### วิธีที่ 2: Clone ใหม่ (ถ้ามี Git repo)

```bash
# Clone repo ใหม่
git clone <your-repo-url> custom-instructions
cd custom-instructions
```

---

## 🚀 การรันแอป (หลังแก้ path แล้ว)

### 1. ตั้งค่า Node Version

```bash
# ใช้ Node v20 (better-sqlite3 ยังไม่รองรับ v25)
nvm use 20

# หรือติดตั้ง v20 ถ้ายังไม่มี
nvm install 20
nvm use 20
```

### 2. รัน Backend

เปิด Terminal หน้าต่างแรก:

```bash
cd server
npm install
npm run dev
```

✅ Backend จะรันที่ `http://localhost:3001`

### 3. รัน Frontend

เปิด Terminal หน้าต่างที่สอง:

```bash
cd client
npm install
npm run dev
```

✅ Frontend จะรันที่ `http://localhost:5173`

### 4. เปิดเว็บ

เปิดเบราว์เซอร์ไปที่ http://localhost:5173

---

## 📝 คำสั่งที่ใช้บ่อย

### Backend (server/)
```bash
npm run dev      # รัน server ด้วย nodemon (auto-reload)
npm start        # รัน server แบบปกติ
```

### Frontend (client/)
```bash
npm run dev      # รัน development server
npm run build    # build สำหรับ production
npm run preview  # preview production build
```

---

## 🔍 ตรวจสอบว่ารันสำเร็จ

### Backend
```bash
curl http://localhost:3001/todos
# ควรได้ [] (array ว่าง)
```

### Frontend
เปิด http://localhost:5173 ใน browser

---

## ⚙️ Dependencies

### Backend
- `express` - Web framework
- `cors` - CORS middleware
- `better-sqlite3` - SQLite database
- `nodemon` - Auto-reload เมื่อโค้ดเปลี่ยน (dev)

### Frontend
- `react` - UI library
- `react-dom` - React DOM renderer
- `vite` - Build tool
- `tailwindcss` - CSS framework

---

## 🐛 Troubleshooting

### ❌ ปัญหา: `npm install` ล้มเหลว (better-sqlite3)

**สาเหตุ:**
- ใช้ Node v25 (ยังไม่รองรับ)
- Path มีอักขระพิเศษ
- ไม่มี build tools (Xcode Command Line Tools บน Mac)

**แก้ไข:**
```bash
# เปลี่ยนเป็น Node v20
nvm use 20

# ติดตั้ง Xcode Command Line Tools (Mac)
xcode-select --install

# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

### ❌ ปัญหา: CORS Error

**สาเหตุ:** Backend ไม่ได้รัน หรือ Frontend เรียก URL ผิด

**แก้ไข:**
1. ตรวจสอบ Backend รันอยู่ที่ port 3001
2. ตรวจสอบ `API_URL` ใน `client/src/App.jsx`

### ❌ ปัญหา: Todos ไม่แสดง

**แก้ไข:**
1. เปิด DevTools (F12) → Network tab
2. ดู Console errors
3. ตรวจสอบว่า Backend ตอบกลับมา

---

## 📚 เอกสารเพิ่มเติม

- [Checklist.md](./Checklist.md) - เช็คลิสต์การทำงาน
- [.github/copilot-instructions.md](./.github/copilot-instructions.md) - Copilot instructions
- [.github/prompts/README.md](./.github/prompts/README.md) - Reusable prompts
- [README.KNOWLEDGE.MD](./README.KNOWLEDGE.MD) - แผนการสอน
