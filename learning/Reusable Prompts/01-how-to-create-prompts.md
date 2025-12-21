# หัวข้อที่ 4: วิธีการสร้าง Reusable Prompts

## Reusable Prompts คืออะไร?

**Reusable Prompts** คือ **เทมเพลตคำสั่ง**ที่เราเขียนไว้ล่วงหน้าและเก็บในไฟล์ เพื่อนำมาใช้ซ้ำได้หลายครั้งเมื่อต้องการทำงานแบบเดียวกัน

**ตัวอย่าง:**
- แทนที่จะพิมพ์คำสั่งยาวๆ ทุกครั้งที่ต้องการตรวจโค้ด
- เราสร้างไฟล์ `code-review.prompt.md` ไว้ แล้วดรียกใช้เมื่อต้องการ

**ประโยชน์:**
- ✅ ประหยัดเวลา - ไม่ต้องพิมพ์ซ้ำ
- ✅ สม่ำเสมอ - ได้ผลลัพธ์ในรูปแบบเดียวกันทุกครั้ง
- ✅ แชร์ได้ - ทีมใช้ prompt เดียวกัน
- ✅ ปรับแต่งได้ - แก้ไข template ง่าย

---

## โครงสร้างไฟล์และการตั้งชื่อ

### ตำแหน่งไฟล์

แนะนำให้เก็บ Reusable Prompts ไว้ใน `.github/prompts/`

```
your-project/
├── .github/
│   └── prompts/                    ← เก็บ Reusable Prompts ที่นี่
│       ├── code-review.prompt.md
│       ├── refactoring.prompt.md
│       └── test-generation.prompt.md
```

### การตั้งชื่อไฟล์

**รูปแบบ:** `[ชื่องาน].prompt.md`

**ตัวอย่าง:**
- `code-review.prompt.md` - สำหรับตรวจสอบโค้ด
- `implement-component.prompt.md` - สำหรับสร้าง component
- `api-documentation.prompt.md` - สำหรับเขียน API docs
- `bug-fix.prompt.md` - สำหรับแก้บัค
- `refactoring.prompt.md` - สำหรับปรับปรุงโค้ด

**ข้อดีของการตั้งชื่อแบบนี้:**
- เห็นชื่อแล้วรู้ว่าใช้ทำอะไร
- ง่ายต่อการค้นหา
- มาตรฐานเดียวกันทั้งทีม

---

## วิธีสร้าง Reusable Prompts

### ขั้นตอนที่ 1: สร้างโฟลเดอร์ prompts

1. เปิด VS Code และเปิดโปรเจคของคุณ
2. ไปที่โฟลเดอร์ `.github` (ถ้าไม่มีให้สร้างก่อน)
3. คลิกขวาที่โฟลเดอร์ `.github`
4. เลือก "New Folder"
5. ตั้งชื่อว่า `prompts`
6. กด Enter

**หลังจากสร้างเสร็จ:**
```
.github/
└── prompts/                 ← โฟลเดอร์ใหม่
```

---

### ขั้นตอนที่ 2: สร้างไฟล์ Prompt แรก

1. คลิกที่โฟลเดอร์ `prompts`
2. คลิกขวา → New File
3. ตั้งชื่อ เช่น `code-review.prompt.md`
4. กด Enter

**หลังจากสร้างเสร็จ:**
```
.github/
└── prompts/
    └── code-review.prompt.md    ← ไฟล์ใหม่
```

---

### ขั้นตอนที่ 3: เขียนเนื้อหา Prompt

เปิดไฟล์ที่เพิ่งสร้างและเขียนเนื้อหาตาม Template นี้:

**โครงสร้าง Prompt ที่ดี:**

```markdown
# [ชื่อ Prompt]

## วัตถุประสงค์
[อธิบายว่า prompt นี้ใช้ทำอะไร]

## คำสั่ง
[คำสั่งที่จะให้ Copilot ทำ]

### รายละเอียด
- [ประเด็นที่ 1]
- [ประเด็นที่ 2]
- [ประเด็นที่ 3]

## ผลลัพธ์ที่ต้องการ
[บอกว่าต้องการผลลัพธ์แบบไหน]

## ตัวอย่าง (ถ้ามี)
[ใส่ตัวอย่างการใช้งาน]
```

---

## ตัวอย่าง Reusable Prompts

### ตัวอย่าง 1: Code Review

**ไฟล์: `code-review.prompt.md`**

```markdown
# Code Review Prompt

## วัตถุประสงค์
ตรวจสอบคุณภาพของโค้ดและให้ข้อเสนอแนะการปรับปรุง

## คำสั่ง
ช่วยตรวจสอบโค้ดนี้ในประเด็นต่อไปนี้:

### 1. คุณภาพโค้ด (Code Quality)
- Readability และ maintainability
- Naming conventions
- Code structure และ organization
- DRY principle (Don't Repeat Yourself)

### 2. ปัญหาที่อาจเกิด (Potential Issues)
- Bugs และ edge cases ที่อาจพลาด
- Performance bottlenecks
- Memory leaks
- Race conditions

### 3. ความปลอดภัย (Security)
- Security vulnerabilities
- Input validation
- Data sanitization
- Authentication/Authorization

### 4. Best Practices
- Design patterns ที่เหมาะสม
- SOLID principles
- Error handling
- Testing considerations

## ผลลัพธ์ที่ต้องการ
- ให้คำแนะนำที่เฉพาะเจาะจง
- มีตัวอย่างโค้ดประกอบ
- เรียงตามลำดับความสำคัญ
- อธิบายเหตุผลของแต่ละข้อ
```

**วิธีใช้:**
1. เปิด Copilot Chat
2. พิมพ์ `/code-review` (ชื่อไฟล์โดยไม่ต้องมี .prompt.md)
3. กด Enter หรือเลือกจากรายการที่ขึ้นมา
4. Copilot จะโหลด prompt อัตโนมัติ
5. แนบโค้ดที่ต้องการตรวจ หรือพิมพ์เพิ่มเติม
6. กด Enter เพื่อรับผลการตรวจสอบ

**💡 หมายเหตุ:** ไม่ต้อง copy-paste เนื้อหาในไฟล์ออกมา IDE จะอ่านให้อัตโนมัติ!

---

### ตัวอย่าง 2: Component Implementation

**ไฟล์: `implement-component.prompt.md`**

```markdown
# Component Implementation Prompt

## วัตถุประสงค์
สร้าง React/Next.js component ตามความต้องการ

## คำสั่ง
สร้าง [ชื่อ component] ที่มีคุณสมบัติดังนี้:

### UI Requirements
- [อธิบาย UI ที่ต้องการ]
- [Layout และ styling]
- [Responsive behavior]

### Functionality
- [Features ที่ต้องมี]
- [User interactions]
- [State management]

### Props
```typescript
interface Props {
  // กำหนด props ที่ต้องการ
}
```

### Technical Requirements
- ใช้ TypeScript
- ใช้ Tailwind CSS สำหรับ styling
- เป็น Functional Component
- มี TypeScript types ครบถ้วน
- จัดการ error cases

## ผลลัพธ์ที่ต้องการ
- โค้ด component ที่สมบูรณ์
- พร้อมใช้งานได้ทันที
- มี comments อธิบายส่วนสำคัญ
- ตัวอย่างการใช้งาน

## ตัวอย่าง
```typescript
// ตัวอย่างการใช้งาน
<MyComponent 
  title="Hello"
  onSubmit={handleSubmit}
/>
```
```

---

### ตัวอย่าง 3: Bug Fix

**ไฟล์: `bug-fix.prompt.md`**

```markdown
# Bug Fix Prompt

## วัตถุประสงค์
วิเคราะห์และแก้ไขบัค

## คำสั่ง
ช่วยแก้ไขบัคนี้:

### อาการของบัค
[อธิบายว่าเกิดอะไรขึ้น]

### Expected Behavior
[พฤติกรรมที่ถูกต้องควรเป็นอย่างไร]

### Steps to Reproduce
1. [ขั้นตอนที่ 1]
2. [ขั้นตอนที่ 2]
3. [ขั้นตอนที่ 3]

### โค้ดที่เกี่ยวข้อง
```
[วางโค้ดที่น่าจะมีปัญหา]
```

### Error Message (ถ้ามี)
```
[Error message หรือ stack trace]
```

## ผลลัพธ์ที่ต้องการ
1. วิเคราะห์สาเหตุของบัค
2. แสดงวิธีแก้ไขพร้อมโค้ด
3. อธิบายว่าทำไมวิธีนี้ใช้ได้
4. แนะนำวิธีป้องกันบัคแบบนี้ในอนาคต
```

**วิธีใช้:**
1. เปิด Copilot Chat
2. พิมพ์ `/bug-fix`
3. Copilot โหลด prompt มา
4. กรอกรายละเอียดบัค และแนบโค้ด
5. กด Enter

---

### ตัวอย่าง 4: Test Generation

**ไฟล์: `test-generation.prompt.md`**

```markdown
# Test Generation Prompt

## วัตถุประสงค์
สร้าง unit tests ที่ครอบคลุม

## คำสั่ง
สร้าง comprehensive tests สำหรับโค้ดนี้:

### Test Coverage ที่ต้องการ

#### 1. Happy Path Tests
- กรณีปกติที่ใช้งานบ่อย
- Input และ output ที่ถูกต้อง
- Expected behaviors

#### 2. Edge Cases
- Boundary values
- Empty/null inputs
- Large datasets
- Special characters

#### 3. Error Cases
- Invalid inputs
- Network failures
- Timeout scenarios
- Missing dependencies

#### 4. Integration Tests (ถ้าจำเป็น)
- การทำงานร่วมกับ components อื่น
- API calls
- Database operations

## Technical Requirements
- ใช้ [testing framework เช่น Jest, Vitest]
- ใช้ describe/it pattern
- Test names ที่อธิบายตัวเอง
- Setup และ teardown ที่เหมาะสม
- Mock dependencies ที่จำเป็น

## ผลลัพธ์ที่ต้องการ
- ไฟล์ test ที่สมบูรณ์
- Test coverage ครอบคลุม
- ทดสอบทั้ง success และ error cases
- มี comments อธิบายแต่ละ test
```

---

### ตัวอย่าง 5: API Documentation

**ไฟล์: `api-documentation.prompt.md`**

```markdown
# API Documentation Prompt

## วัตถุประสงค์
สร้าง API documentation ที่ครบถ้วนและชัดเจน

## คำสั่ง
สร้าง API documentation สำหรับ endpoint/function นี้:

### 1. Overview
- ชื่อและวัตถุประสงค์
- Use cases หลัก
- Version และ Status

### 2. Endpoint Details
- HTTP Method และ URL
- Authentication requirements
- Rate limiting

### 3. Request
#### Parameters
- Path parameters
- Query parameters
- Body parameters

#### Request Example
```json
// ตัวอย่าง request
```

### 4. Response
#### Success Response
- Status code
- Response structure
- Field descriptions

#### Error Responses
- Error codes
- Error messages
- Troubleshooting

#### Response Examples
```json
// Success response

// Error response
```

### 5. Notes
- Performance considerations
- Breaking changes (ถ้ามี)
- Deprecation warnings
- Related endpoints

## ผลลัพธ์ที่ต้องการ
- เขียนเป็น Markdown format
- มีตัวอย่างโค้ดที่ใช้งานได้จริง
- ครบถ้วน ชัดเจน เข้าใจง่าย
- พร้อม copy ไปใช้ได้เลย
```

---