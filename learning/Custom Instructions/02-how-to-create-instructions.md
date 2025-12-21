# หัวข้อที่ 3: วิธีการสร้าง Custom Instructions

## ภาพรวม

การสร้าง Custom Instructions มี **2 วิธี**:

1. **แบบไฟล์เดียว** - สร้างไฟล์เดียวชื่อ `copilot-instructions.md` (แนะนำสำหรับผู้เริ่มต้น)
2. **แบบแยกไฟล์** - แยกเป็นหลายไฟล์ตามหมวดหมู่ (สำหรับโปรเจคใหญ่)

---

## วิธีที่ 1: แบบไฟล์เดียว

### ขั้นตอนการสร้าง

#### ขั้นตอนที่ 1: สร้างโฟลเดอร์ .github

1. คลิกขวาที่พื้นที่ว่างในแผง Explorer (ทางซ้ายมือ)
2. เลือก "New Folder"
3. ตั้งชื่อว่า `.github` (อย่าลืมจุดด้านหน้า)
4. กด Enter

**หลังจากสร้างเสร็จ คุณจะเห็น:**
```
your-project/
├── .github/         ← โฟลเดอร์ใหม่ที่เพิ่งสร้าง
├── src/
├── package.json
└── README.md
```

💡 **หมายเหตุ:** 
- จุด (.) ด้านหน้าทำให้โฟลเดอร์นี้เป็น "hidden folder" 
- เป็นมาตรฐานของ GitHub สำหรับเก็บไฟล์ config

---

#### ขั้นตอนที่ 2: สร้างไฟล์ copilot-instructions.md

1. คลิกที่โฟลเดอร์ `.github` ที่เพิ่งสร้าง
2. คลิกขวาบนโฟลเดอร์
3. เลือก "New File"
4. ตั้งชื่อว่า `copilot-instructions.md`
5. กด Enter

**หลังจากสร้างเสร็จ คุณจะเห็น:**
```
your-project/
├── .github/
│   └── copilot-instructions.md    ← ไฟล์ใหม่ที่เพิ่งสร้าง
├── src/
├── package.json
└── README.md
```

---

#### ขั้นตอนที่ 3: เขียนเนื้อหา Instructions

1. คลิกเปิดไฟล์ `copilot-instructions.md` ที่เพิ่งสร้าง
2. คัดลอกเนื้อหา Template ด้านล่างนี้ไปวาง
3. ปรับแต่งตามความต้องการของโปรเจคคุณ

**Template พื้นฐาน (คัดลอกไปใช้ได้เลย):**

```markdown
# Project Instructions

## ภาษาและการสื่อสาร
- ตอบเป็นภาษาไทยเท่านั้น
- ใช้คำศัพท์ทางเทคนิคเป็นภาษาอังกฤษ
- อธิบายให้เข้าใจง่าย ไม่ซับซ้อนเกินไป

## เทคโนโลยีที่ใช้ในโปรเจค
- Frontend: Next.js 14
- ภาษา: TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL

## รูปแบบการเขียนโค้ด

### การตั้งชื่อ
- Component: ใช้ PascalCase (เช่น `UserProfile.tsx`)
- Function: ใช้ camelCase (เช่น `getUserData`)
- ค่าคงที่: ใช้ UPPER_SNAKE_CASE (เช่น `API_URL`)

### กฎการเขียนโค้ด
- ใช้ Functional Components
- ใช้ async/await สำหรับ asynchronous code
- ห้ามใช้ `any` type ใน TypeScript

## โครงสร้างโปรเจค

src/
├── app/              # หน้าเว็บไซต์
├── components/       # Components ที่ใช้ซ้ำได้
├── lib/              # Utility functions
└── types/            # TypeScript types


## ความปลอดภัย
- ห้ามเก็บ API keys ในโค้ด
- ตรวจสอบ user input ทุกครั้ง
- ใช้ environment variables สำหรับข้อมูลสำคัญ

### File Organization

src/
├── app/              # Next.js App Router pages
├── components/       # Reusable components
│   ├── ui/          # Basic UI components
│   └── features/    # Feature-specific components
├── lib/             # Utilities and helpers
├── types/           # TypeScript types
└── styles/          # Global styles

### Best Practices
- แต่ละ component ต้องมี PropTypes หรือ TypeScript types
- แยก Business Logic ออกจาก UI Components
- ใช้ Custom Hooks สำหรับ logic ที่ซับซ้อน
- เขียน Unit Tests สำหรับ utility functions

### Error Handling
- ใช้ try-catch สำหรับ async operations
- แสดง error messages ที่เข้าใจง่าย
- Log errors ไปยัง monitoring service

## Security Guidelines
- ห้ามเก็บ API keys ใน code
- Sanitize user inputs ทุกครั้ง
- ใช้ environment variables สำหรับ sensitive data
- Validate data ทั้ง client และ server side
```

---

#### ขั้นตอนที่ 4: บันทึกไฟล์

1. กด `Ctrl + S` (Windows) หรือ `Cmd + S` (Mac) เพื่อบันทึกไฟล์
2. เสร็จแล้ว! GitHub Copilot จะอ่าน instructions อัตโนมัติ

---

#### ขั้นตอนที่ 5: ทดสอบว่า Instructions ทำงาน

1. เปิด Copilot Chat (คลิกไอคอน Copilot ทางด้านขวา หรือกด `Ctrl + Alt + I`)
2. ลองถามคำถามง่ายๆ เช่น "สร้าง button component"
3. ดูว่า Copilot ตอบตาม instructions ที่คุณเขียนไว้หรือไม่
   - ตรวจสอบว่าตอบเป็นภาษาไทยไหม?
   - ใช้เทคโนโลยีที่ระบุไว้ไหม?
   - ตั้งชื่อตามกฎที่กำหนดไหม?

**ตัวอย่างการทดสอบ:**
```
คุณถาม: "สร้าง button component"

Copilot จะตอบ:
- ✅ เป็นภาษาไทย (ถ้าคุณตั้งให้ตอบเป็นภาษาไทย)
- ✅ ใช้ TypeScript (ถ้าคุณระบุว่าใช้ TypeScript)
- ✅ ใช้ Tailwind CSS (ถ้าคุณระบุว่าใช้ Tailwind)
- ✅ ตั้งชื่อเป็น PascalCase (ถ้าคุณกำหนดไว้)
```

---

## วิธีที่ 2: แบบแยกไฟล์ (สำหรับโปรเจคใหญ่)

### เหมาะสำหรับใคร?
- ✅ โปรเจคใหญ่ที่มี instructions เยอะ
- ✅ ทีมงานมากกว่า 5 คน
- ✅ ต้องการแยกหมวดหมู่ให้ชัดเจน
- ✅ มีหลาย service หรือ monorepo

### ขั้นตอนการสร้าง

#### ขั้นตอนที่ 1: สร้างโฟลเดอร์ .github

1. ทำเหมือนวิธีที่ 1 - สร้างโฟลเดอร์ `.github`
2. คลิกขวาที่โฟลเดอร์ `.github`
3. เลือก "New Folder"
4. ตั้งชื่อว่า `instructions`
5. กด Enter

**หลังจากสร้างเสร็จ คุณจะเห็น:**
```
your-project/
├── .github/
│   └── instructions/    ← โฟลเดอร์ใหม่
├── src/
└── package.json
```

---

#### ขั้นตอนที่ 2: สร้างไฟล์แยกตามหมวดหมู่

1. คลิกที่โฟลเดอร์ `instructions` ที่เพิ่งสร้าง
2. สร้างไฟล์ใหม่ดังนี้ (คลิกขวา → New File):
   - `general.instructions.md` - ข้อมูลทั่วไป
   - `tech-stack.instructions.md` - เทคโนโลยีที่ใช้
   - `code-style.instructions.md` - รูปแบบการเขียนโค้ด
   - `security.instructions.md` - แนวทางความปลอดภัย

**หลังจากสร้างเสร็จ คุณจะเห็น:**
```
your-project/
├── .github/
│   └── instructions/
│       ├── general.instructions.md       ← ไฟล์ที่สร้างใหม่
│       ├── tech-stack.instructions.md    ← ไฟล์ที่สร้างใหม่
│       ├── code-style.instructions.md    ← ไฟล์ที่สร้างใหม่
│       └── security.instructions.md      ← ไฟล์ที่สร้างใหม่
├── src/
└── package.json
```

---

#### ขั้นตอนที่ 3: สร้างไฟล์หลัก copilot-instructions.md

1. กลับมาที่โฟลเดอร์ `.github`
2. คลิกขวา → New File
3. ตั้งชื่อว่า `copilot-instructions.md`
4. ไฟล์นี้จะเป็นตัวเชื่อมไปยังไฟล์อื่นๆ

**โครงสร้างสุดท้าย:**
```
your-project/
├── .github/
│   ├── copilot-instructions.md    ← ไฟล์หลัก
│   └── instructions/
│       ├── general.instructions.md
│       ├── tech-stack.instructions.md
│       ├── code-style.instructions.md
│       └── security.instructions.md
├── src/
└── package.json
```

---

#### ขั้นตอนที่ 4: เขียนเนื้อหาในไฟล์หลัก

เปิดไฟล์ `copilot-instructions.md` และคัดลอกเนื้อหานี้:

```markdown
# Project Instructions

เอกสารนี้รวบรวม instructions ทั้งหมดของโปรเจค

## สารบัญ
- ข้อมูลทั่วไป: ดูที่ `instructions/general.instructions.md`
- เทคโนโลยี: ดูที่ `instructions/tech-stack.instructions.md`
- รูปแบบโค้ด: ดูที่ `instructions/code-style.instructions.md`
- ความปลอดภัย: ดูที่ `instructions/security.instructions.md`

## สรุปสั้นๆ

### ภาษา
- ตอบเป็นภาษาไทยเท่านั้น

### เทคโนโลยี
- Next.js 14 + TypeScript + Tailwind CSS

### การเขียนโค้ด
- ใช้ Functional Components
- ใช้ async/await
- ห้ามใช้ `any` type

สำหรับรายละเอียดเพิ่มเติม ดูในไฟล์แต่ละหมวดหมู่
```

---

#### ขั้นตอนที่ 5: เขียนเนื้อหาในไฟล์แต่ละหมวดหมู่

**ไฟล์ `general.instructions.md`** - ข้อมูลทั่วไป

```markdown
# ข้อมูลทั่วไปของโปรเจค

## รายละเอียดโปรเจค
- ชื่อ: E-commerce Platform
- ประเภท: เว็บไซต์ขายของออนไลน์
- ทีม: 10 คน

## การสื่อสาร
- ตอบเป็นภาษาไทยเท่านั้น
- คำศัพท์เทคนิคใช้ภาษาอังกฤษ
- อธิบายให้เข้าใจง่าย

## การทำงาน
1. สร้าง branch ใหม่จาก `develop`
2. เขียนโค้ดและ test
3. สร้าง pull request
4. รอ code review
5. Merge เข้า `develop`
```

**ไฟล์ `tech-stack.instructions.md`** - เทคโนโลยีที่ใช้

```markdown
# เทคโนโลยีที่ใช้

## Frontend
- Framework: Next.js 14
- ภาษา: TypeScript
- Styling: Tailwind CSS
- UI: shadcn/ui
- State: Zustand
- Forms: React Hook Form + Zod

## Backend
- Runtime: Node.js 20
- ORM: Prisma
- Database: PostgreSQL 15
- Authentication: NextAuth.js

## Tools
- Hosting: Vercel
- Version Control: GitHub
```

**ไฟล์ `code-style.instructions.md`** - รูปแบบการเขียนโค้ด

```markdown
# รูปแบบการเขียนโค้ด

## การตั้งชื่อไฟล์
- Component: PascalCase (เช่น `UserProfile.tsx`)
- Utility: kebab-case (เช่น `format-date.ts`)
- Hook: camelCase เริ่มด้วย `use` (เช่น `useAuth.ts`)

## การตั้งชื่อตัวแปรและ Function
- ตัวแปร: camelCase (เช่น `userName`, `isLoading`)
- Function: camelCase (เช่น `getUserData`, `handleClick`)
- ค่าคงที่: UPPER_SNAKE_CASE (เช่น `API_URL`, `MAX_RETRY`)

## กฎการเขียน
- ใช้ Functional Components เท่านั้น
- ใช้ async/await แทน .then()
- ห้ามใช้ `any` type ใน TypeScript
- แต่ละ component ต้องมี TypeScript types

## โครงสร้าง Component
```typescript
import { useState } from 'react'

interface Props {
  name: string
  age?: number
}

export function UserCard({ name, age = 0 }: Props) {
  const [isActive, setIsActive] = useState(false)
  
  const handleClick = () => {
    setIsActive(!isActive)
  }
  
  return <div onClick={handleClick}>{name}</div>
}
```
```

**ไฟล์ `security.instructions.md`** - แนวทางความปลอดภัย

```markdown
# แนวทางความปลอดภัย

## Authentication
- ใช้ NextAuth.js สำหรับ login
- เก็บ JWT tokens ใน httpOnly cookies
- มี refresh token expiration

## Data Validation
- ตรวจสอบ input ทั้ง client และ server
- ใช้ Zod สำหรับ validation
- ทำ sanitization ก่อนบันทึกข้อมูล

## Secrets
- ห้ามเก็บ API keys ในโค้ด
- ใช้ `.env.local` สำหรับ local
- ใช้ Vercel Environment Variables สำหรับ production

## API
- Rate limiting: 100 requests/นาที
- ตรวจสอบ CORS
- ป้องกัน SQL injection ด้วย Prisma
```

---

#### ขั้นตอนที่ 6: บันทึกและทดสอบ

1. บันทึกทุกไฟล์ (`Ctrl + S` หรือ `Cmd + S`)
2. GitHub Copilot จะอ่านไฟล์หลัก (`copilot-instructions.md`) และไฟล์ที่เกี่ยวข้อง
3. ทดสอบโดยถามคำถามใน Copilot Chat

---

### ตัวอย่างการจัดโครงสร้างแบบอื่นๆ

#### แบบแยกตาม Feature

```
.github/
├── copilot-instructions.md        # ไฟล์หลัก
└── instructions/
    ├── general.instructions.md    # ทั่วไป
    ├── frontend/                   # Frontend
    │   ├── overview.instructions.md
    │   ├── components.instructions.md
    │   └── styling.instructions.md
    ├── backend/                    # Backend
    │   ├── overview.instructions.md
    │   ├── api.instructions.md
    │   └── database.instructions.md
    └── shared/                     # ใช้ร่วมกัน
        ├── code-style.instructions.md
        └── security.instructions.md
```

#### แบบแยกตามลำดับความสำคัญ

```
.github/
├── copilot-instructions.md
└── instructions/
    ├── 01-overview.instructions.md       # ภาพรวม
    ├── 02-tech-stack.instructions.md     # เทคโนโลยี
    ├── 03-code-style.instructions.md     # รูปแบบโค้ด
    ├── 04-testing.instructions.md        # การทดสอบ
    └── 05-security.instructions.md       # ความปลอดภัย
```
        └── security.md
```

#### แบบแยกตามลำดับความสำคัญ

```
.github/
└── copilot/
    ├── copilot-instructions.md
    ├── 01-overview.md             # ภาพรวม
    ├── 02-tech-stack.md           # เทคโนโลยี
    ├── 03-code-style.md           # รูปแบบโค้ด
    ├── 04-testing.md              # การทดสอบ
    └── 05-security.md             # ความปลอดภัย
```

---

### ข้อดี - ข้อเสีย ของแบบแยกไฟล์

**ข้อดี:**
- ✅ จัดระเบียบได้ดี แยกหมวดหมู่ชัดเจน
- ✅ แก้ไขง่าย แก้แค่ไฟล์ที่เกี่ยวข้อง
- ✅ หลายคนแก้พร้อมกันได้ ไม่ชนกัน
- ✅ เหมาะกับโปรเจคใหญ่และซับซ้อน
- ✅ สามารถขยายได้ง่าย
- ✅ นำไฟล์ไปใช้ซ้ำในโปรเจคอื่นได้

**ข้อเสีย:**
- ❌ ซับซ้อนกว่าแบบไฟล์เดียว
- ❌ ต้องจัดการหลายไฟล์
- ❌ ต้องวางโครงสร้างให้ดีตั้งแต่แรก
- ❌ ยุ่งยากเกินไปสำหรับโปรเจคเล็ก

---

## เปรียบเทียบ 2 วิธี

| ลักษณะ | แบบไฟล์เดียว | แบบแยกไฟล์ |
|--------|---------------|------------|
| **ความยาก** | ง่าย เข้าใจง่าย | ซับซ้อนหน่อย |
| **จำนวนไฟล์** | 1 ไฟล์ | หลายไฟล์ |
| **การจัดการ** | ง่ายมาก | ต้องวางแผน |
| **หาข้อมูล** | เห็นทุกอย่างในที่เดียว | ต้องเปิดหลายไฟล์ |
| **แก้ไข** | แก้ไฟล์เดียว | แก้แค่ไฟล์ที่เกี่ยวข้อง |
| **ทีมใหญ่** | อาจชนกันเวลาแก้ | แก้พร้อมกันได้ ไม่ชน |
| **เหมาะกับ** | โปรเจคเล็ก-กลาง | โปรเจคใหญ่ |
| **ขนาดทีม** | 1-5 คน | 5+ คน |

---

## แนะนำการเลือกใช้

### ใช้แบบไฟล์เดียวเมื่อ:
- ✅ เพิ่งเริ่มใช้ GitHub Copilot Instructions
- ✅ โปรเจคเล็ก instructions ไม่เกิน 200 บรรทัด
- ✅ ทีมเล็ก 1-5 คน
- ✅ ต้องการความเรียบง่าย
- ✅ ไม่ต้องการความซับซ้อน

### ใช้แบบแยกไฟล์เมื่อ:
- ✅ โปรเจคใหญ่ instructions เกิน 200 บรรทัด
- ✅ ทีมใหญ่ 5+ คน
- ✅ มีหลาย service หรือ monorepo
- ✅ ต้องการจัดหมวดหมู่ชัดเจน
- ✅ หลายคนต้องแก้ไขพร้อมกัน
- ✅ ต้องการนำไฟล์ไปใช้ซ้ำ

### เริ่มแบบง่าย แล้วค่อยเปลี่ยนทีหลัง

**ขั้นตอนแนะนำ:**

1. **เริ่มต้น** - ใช้แบบไฟล์เดียว (copilot-instructions.md)
   - เรียนรู้และทดลองง่าย
   - เหมาะกับคนเพิ่งเริ่ม

2. **โตขึ้น** - ไฟล์เริ่มใหญ่ (150-200 บรรทัด)
   - ยังใช้แบบไฟล์เดียวได้
   - แต่เริ่มคิดจะแยก

3. **ขยาย** - ไฟล์ใหญ่เกิน 200 บรรทัด หรือทีมโต
   - ย้ายเป็นแบบแยกไฟล์
   - แยกเนื้อหาไปตามหมวดหมู่

---

## สรุป

### แบบไฟล์เดียว (copilot-instructions.md)

**วิธีสร้าง:**
1. สร้างโฟลเดอร์ `.github`
2. สร้างไฟล์ `copilot-instructions.md`
3. เขียนเนื้อหา instructions
4. บันทึกและทดสอบ

**เหมาะกับ:**
- โปรเจคเล็ก-กลาง
- ทีม 1-5 คน
- ต้องการความง่าย
- คนเพิ่งเริ่มใช้

**ข้อดี:**
เรียบง่าย เห็นทุกอย่างในที่เดียว แก้ไขง่าย

**ข้อเสีย:**
ไฟล์ใหญ่เมื่อเนื้อหาเยอะ หาข้อมูลยากเมื่อยาวมาก

---

### แบบแยกไฟล์ (Multiple Files)

**วิธีสร้าง:**
1. สร้างโฟลเดอร์ `.github/instructions`
2. สร้างไฟล์แยกตามหมวดหมู่ (เติม .instructions.md ต่อท้าย)
3. สร้างไฟล์หลัก `copilot-instructions.md` เป็นดัชนี
4. เขียนเนื้อหาในแต่ละไฟล์
5. บันทึกและทดสอบ

**เหมาะกับ:**
- โปรเจคใหญ่
- ทีม 5+ คน
- Instructions ซับซ้อน
- Monorepo

**ข้อดี:**
จัดระเบียบดี แก้ไขง่าย หลายคนทำงานพร้อมกันได้ ขยายได้ดี

**ข้อเสีย:**
ซับซ้อนกว่า ต้องจัดการหลายไฟล์ ยุ่งยากสำหรับโปรเจคเล็ก

---

## คำแนะนำสุดท้าย

1. **เริ่มง่ายๆ** - ใช้แบบไฟล์เดียวก่อน
2. **ทดลองและปรับ** - เขียน instructions แล้วทดสอบดู
3. **ค่อยขยาย** - เมื่อไฟล์ใหญ่หรือทีมโตค่อยแยก
4. **ทดสอบบ่อยๆ** - ถาม Copilot Chat ดูว่า instructions ทำงานถูกต้อง
5. **อัพเดทเสมอ** - เมื่อโปรเจคเปลี่ยนแปลง ก็อัพเดท instructions
| **Merge Conflicts** | เกิดบ่อย | เกิดน้อย |
| **Scalability** | จำกัด | Scale ได้ดี |
| **เหมาะกับ** | โปรเจคเล็ก-กลาง | โปรเจคใหญ่ |
| **ทีม** | เล็ก (1-5 คน) | ใหญ่ (5+ คน) |

---

## แนะนำการเลือกใช้

### ใช้ Single File เมื่อ:
- ✅ โปรเจคใหม่ที่เพิ่งเริ่ม
- ✅ Instructions ไม่เกิน 200 บรรทัด
- ✅ ทีมเล็ก (1-5 คน)
- ✅ ต้องการความเรียบง่าย
- ✅ Single app (ไม่ใช่ monorepo)

### ใช้ Multiple Files เมื่อ:
- ✅ โปรเจคใหญ่และซับซ้อน
- ✅ Instructions เกิน 200 บรรทัด
- ✅ ทีมใหญ่ (5+ คน)
- ✅ Monorepo หรือ Multi-service
- ✅ ต้องการจัดการเป็นหมวดหมู่
- ✅ หลายคนแก้พร้อมกัน

### เริ่มจาก Single File แล้วค่อย Migrate
```
Phase 1: เริ่มต้น
└── copilot-instructions.md (เล็ก)

Phase 2: โตขึ้น
└── copilot-instructions.md (ใหญ่ขึ้น)

Phase 3: Refactor
├── copilot-instructions.md (index)
└── copilot/
    ├── general.md
    ├── tech-stack.md
    └── code-style.md
```

---

## สรุป

### Single File (copilot-instructions.md)
- **ขั้นตอน**: สร้าง `.github/` → สร้าง `copilot-instructions.md` → เขียนเนื้อหา
- **เหมาะกับ**: โปรเจคเล็ก-กลาง, ทีมเล็ก, ต้องการความง่าย
- **ข้อดี**: เรียบง่าย, เห็นทุกอย่างในที่เดียว
- **ข้อเสีย**: ไฟล์ใหญ่, merge conflicts, ไม่ scale

### Multiple Files (แยก Folder)
- **ขั้นตอน**: สร้าง `.github/copilot/` → สร้างไฟล์แยก → สร้าง index → เชื่อมโยง
- **เหมาะกับ**: โปรเจคใหญ่, ทีมใหญ่, monorepo, instructions ซับซ้อน
- **ข้อดี**: จัดระเบียบดี, scale ได้, แก้พร้อมกันได้
- **ข้อเสีย**: ซับซ้อน, ต้องจัดการหลายไฟล์

### คำแนะนำ
1. เริ่มจาก **Single File** เสมอ
2. เมื่อไฟล์เกิน **200 บรรทัด** หรือทีมโต ค่อย **Migrate**
3. วางโครงสร้างให้ดีตั้งแต่ต้นถ้ารู้ว่าโปรเจคจะใหญ่
4. ทดสอบ instructions โดยถาม Copilot Chat
