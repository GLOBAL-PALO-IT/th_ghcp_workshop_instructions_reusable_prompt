# หัวข้อที่ 2: ความแตกต่างระหว่าง Instructions กับ Prompts

## Instructions vs Prompts คืออะไร?

### Instructions (คำสั่งถาวร)

**คำนิยาม:**
- เหมือน "กฎ" ของโปรเจคที่ทุกคนต้องปฏิบัติตาม
- ใช้งานอัตโนมัติตลอดเวลาที่เปิดโปรเจค

**ตัวอย่าง:**
```markdown
# Instructions
- ตอบเป็นภาษาไทยเท่านั้น
- ใช้ TypeScript strict mode
- ใช้ Functional Components
```

---

### Reusable Prompts (เทมเพลตคำสั่งที่ใช้ซ้ำได้)

**คำนิยาม:**
- เป็น**เทมเพลตคำสั่งที่เขียนไว้ล่วงหน้า**และเก็บไว้ในไฟล์
- เหมือน "สูตรสำเร็จ" ที่เตรียมไว้แล้วนำมาใช้ซ้ำได้
- ใช้เมื่อมีงานที่ต้องทำซ้ำๆ แต่รายละเอียดอาจแตกต่างกัน

**ลักษณะเฉพาะ:**
- 📝 **Template-based** - เป็นแม่แบบที่เขียนไว้แล้ว
- ♻️ **Reusable** - ใช้ซ้ำได้หลายครั้ง
- 📦 **Stored** - เก็บไว้ในไฟล์ไม่ต้องพิมพ์ใหม่
- 🎯 **Customizable** - ปรับแต่งได้ตามความต้องการ

**ตัวอย่าง:**
```markdown
<!-- code-review.md -->
ช่วยตรวจสอบโค้ดนี้ในประเด็น:
- Code quality และ readability
- Potential bugs
- Performance issues
- Security vulnerabilities
```

---

## เปรียบเทียบ Instructions vs Reusable Prompts

| ลักษณะ | Instructions | Reusable Prompts |
|--------|--------------|------------------|
| **ระยะเวลา** | ถาวร (Permanent) | ใช้ซ้ำได้ (Reusable) |
| **ขอบเขต** | ทั้งโปรเจค | งานเฉพาะที่ทำบ่อย |
| **การใช้งาน** | อัตโนมัติ | Copy มาใช้เมื่อต้องการ |
| **เป้าหมาย** | กำหนดพฤติกรรม | Template สำหรับงานซ้ำ |
| **ตัวอย่าง** | "ใช้ภาษาไทย", "ใช้ TS" | "Code Review", "API Docs" |
| **ตำแหน่ง** | `.github/copilot-instructions.md` | `Reusable Prompts/*.md` |
| **ผู้ใช้** | ทั้งทีม (อัตโนมัติ) | ทั้งทีม (เลือกใช้) |

**อุปมาที่เข้าใจง่าย:**
```
Instructions      = กฎของบริษัท (ทุกคนต้องตาม ตลอดเวลา)
Reusable Prompts  = เอกสารแบบฟอร์ม (มีแม่แบบให้ใช้ซ้ำ)
```

---

## Use Cases สำหรับ Instructions

### ⚙️ 1. กำหนดมาตรฐานการเขียนโค้ด
**เหมาะสำหรับ:**
- Coding Style (camelCase, PascalCase, etc.)
- Code Formatting (tabs, spaces, line breaks)
- Best Practices ของโปรเจค

**ตัวอย่าง:**
```markdown
## Code Style
- ใช้ Functional Components เท่านั้น
- ใช้ async/await แทน .then()
- ไม่ใช้ any type ใน TypeScript
```

**ทำไมใช้ Instructions:**
- ✅ ต้องการความสม่ำเสมอทั้งโปรเจค
- ✅ ทุกคนในทีมต้องทำตาม
- ✅ ไม่อยากบอกซ้ำทุกครั้ง

---

### 🌍 2. กำหนดภาษาและการสื่อสาร
**เหมาะสำหรับ:**
- ภาษาที่ใช้ตอบ (ไทย, อังกฤษ, ญี่ปุ่น)
- รูปแบบการสื่อสาร (formal, casual)
- ระดับรายละเอียดในการอธิบาย

**ตัวอย่าง:**
```markdown
## Language
- ตอบเป็นภาษาไทยเท่านั้น
- ใช้คำศัพท์ทางเทคนิคเป็นภาษาอังกฤษ
- อธิบายให้เข้าใจง่าย ไม่ซับซ้อนเกินไป
```

**ทำไมใช้ Instructions:**
- ✅ ทุกคนในทีมพูดภาษาเดียวกัน
- ✅ ไม่ต้องบอกภาษาทุกครั้ง
- ✅ Documentation และ Comment เป็นภาษาเดียวกัน

---

### 🏗️ 3. กำหนด Tech Stack และ Architecture
**เหมาะสำหรับ:**
- Framework และ Library ที่ใช้
- Design Pattern (MVC, MVVM, Clean Architecture)
- Folder Structure

**ตัวอย่าง:**
```markdown
## Tech Stack
- Frontend: Next.js 14 App Router
- Backend: NestJS
- Database: PostgreSQL + Prisma
- State: Zustand

## Architecture
- ใช้ Clean Architecture
- แยก Business Logic ออกจาก UI
- ใช้ Repository Pattern
```

**ทำไมใช้ Instructions:**
- ✅ Copilot เข้าใจบริบทของโปรเจค
- ✅ แนะนำโค้ดที่เข้ากับ Stack ที่ใช้
- ✅ ไม่แนะนำ Library หรือ Pattern ที่ไม่เหมาะสม

---

### 👥 4. ความต้องการเฉพาะของทีม
**เหมาะสำหรับ:**
- Domain Knowledge (e.g., FinTech, Healthcare)
- Business Rules ของโปรเจค
- Security Requirements

**ตัวอย่าง:**
```markdown
## Business Rules
- ราคาทุกอย่างเก็บเป็น satang (ไม่ใช่บาท)
- User ID ต้องเป็น UUID v4 เท่านั้น
- ห้ามเก็บข้อมูลส่วนตัวใน localStorage

## Security
- Sensitive data ต้อง encrypt ก่อนบันทึก
- API calls ต้องมี rate limiting
```

**ทำไมใช้ Instructions:**
- ✅ ป้องกันความผิดพลาดที่เกิดจากไม่รู้ Business Rules
- ✅ ทุกคนเข้าใจ Domain เดียวกัน
- ✅ Security ไม่ถูกมองข้าม

---

## Use Cases สำหรับ Reusable Prompts

### 🎨 1. Code Review Template
**เหมาะสำหรับ:**
- ตรวจสอบคุณภาพโค้ดตามมาตรฐาน
- หาบัคและช่องโหว่
- ให้ข้อเสนอแนะการปรับปรุง

**ตัวอย่าง Reusable Prompt:**
```markdown
<!-- code-review.md -->
ช่วยตรวจสอบโค้ดนี้ในประเด็นต่อไปนี้:

1. **Code Quality**
   - Readability และ maintainability
   - Naming conventions
   - Code structure

2. **Potential Issues**
   - Bugs และ edge cases
   - Performance bottlenecks
   - Memory leaks

3. **Security**
   - Security vulnerabilities
   - Input validation
   - Data sanitization

4. **Best Practices**
   - Design patterns
   - SOLID principles
   - Error handling

โปรดให้คำแนะนำที่เฉพาะเจาะจงและมีตัวอย่างโค้ด
```

**ทำไมใช้ Reusable Prompts:**
- ✅ ใช้ตรวจโค้ดซ้ำๆ ได้เรื่อยๆ
- ✅ มาตรฐานการตรวจเหมือนกันทุกครั้ง
- ✅ ไม่ต้องพิมพ์คำสั่งยาวใหม่ทุกครั้ง

---

### 🔧 2. Refactoring Template
**เหมาะสำหรับ:**
- Refactoring โค้ดให้ดีขึ้น
- ปรับปรุง code structure
- เพิ่ม performance

**ตัวอย่าง Reusable Prompt:**
```markdown
<!-- refactoring.md -->
ช่วย refactor โค้ดนี้โดย:

1. **Clean Code**
   - แยก function ให้เล็กลงและทำอย่างเดียว
   - ลด code duplication
   - ปรับปรุง naming ให้ชัดเจน

2. **Performance**
   - ลด unnecessary re-renders
   - Optimize loops และ conditionals
   - ใช้ memoization ที่เหมาะสม

3. **Modern Patterns**
   - ใช้ modern syntax (ES6+)
   - Apply design patterns ที่เหมาะสม
   - ใช้ TypeScript types อย่างเต็มที่

อธิบายการเปลี่ยนแปลงและเหตุผลด้วย
```

**ทำไมใช้ Reusable Prompts:**
- ✅ มาตรฐาน refactoring เหมือนกันทุกครั้ง
- ✅ ไม่พลาดประเด็นสำคัญ
- ✅ ใช้กับโค้ดหลายๆ ส่วนได้

---

### 📝 3. Documentation Template
**เหมาะสำหรับ:**
- เขียน API Documentation
- สร้าง Component Documentation
- เขียน Technical Specs

**ตัวอย่าง Reusable Prompt:**
```markdown
<!-- api-documentation.md -->
สร้าง API documentation สำหรับ endpoint/function นี้:

## Overview
- ชื่อและวัตถุประสงค์
- Use cases หลัก

## Signature
- Parameters (type, required/optional, description)
- Return type และ structure
- Possible errors/exceptions

## Examples
- Basic usage
- Advanced usage
- Edge cases

## Notes
- Performance considerations
- Breaking changes (ถ้ามี)
- Related APIs

เขียนเป็น Markdown format พร้อมตัวอย่างโค้ด
```

**ทำไมใช้ Reusable Prompts:**
- ✅ Documentation มีรูปแบบสม่ำเสมอ
- ✅ ไม่พลาดรายละเอียดสำคัญ
- ✅ ใช้กับ API/Function หลายตัวได้

---

### 💡 4. Test Generation Template
**เหมาะสำหรับ:**
- สร้าง Unit Tests
- สร้าง Integration Tests
- สร้าง E2E Tests

**ตัวอย่าง Reusable Prompt:**
```markdown
<!-- test-generation.md -->
สร้าง comprehensive tests สำหรับโค้ดนี้:

## Test Coverage
1. **Happy Path**
   - Normal cases ที่ใช้งานบ่อย
   - Expected outputs

2. **Edge Cases**
   - Boundary values
   - Empty/null inputs
   - Large datasets

3. **Error Cases**
   - Invalid inputs
   - Network failures
   - Timeout scenarios

## Test Structure
- ใช้ describe/it pattern
- Test names ที่อธิบายตัวเอง
- Setup และ teardown ที่เหมาะสม
- Mock dependencies

## Assertions
- ตรวจสอบทุก return values
- ตรวจสอบ side effects
- ตรวจสอบ error messages
```

**ทำไมใช้ Reusable Prompts:**
- ✅ Test coverage ครอบคลุมเหมือนกันทุกครั้ง
- ✅ ไม่พลาด edge cases สำคัญ
- ✅ ใช้กับ functions หลายตัวได้

---

## กรณีที่ควรใช้ร่วมกัน

### 🤝 การทำงานร่วมกัน

**Instructions ทำหน้าที่:**
- ตั้งกฎพื้นฐาน (baseline)
- กำหนดบริบทโปรเจค
- สร้างความสม่ำเสมอ

**Reusable Prompts ทำหน้าที่:**
- เป็น Template สำหรับงานที่ทำบ่อย
- ปรับแต่งรายละเอียดได้ตามต้องการ
- ใช้ซ้ำได้หลายครั้ง

**การทำงานร่วมกัน:**
```
Instructions (พื้นฐาน)
      ↓
    Copilot เข้าใจบริบท
      ↓
Reusable Prompts (Template)
      ↓
    ผลลัพธ์ที่สม่ำเสมอและตรงใจ
```

---

### 📚 ตัวอย่างการใช้ร่วมกัน

**Scenario: Code Review**

**1. Instructions (ตั้งค่าไว้แล้ว):**
```markdown
## Tech Stack
- Next.js 14 with App Router
- TypeScript strict mode
- Tailwind CSS

## Code Style
- ใช้ Functional Components
- ใช้ async/await
- Error handling ด้วย try-catch
```

**2. Reusable Prompt (เตรียมไว้ใน code-review.md):**
```markdown
ช่วยตรวจสอบโค้ดนี้ในประเด็นต่อไปนี้:
1. Code Quality - Readability และ maintainability
2. Potential Issues - Bugs และ edge cases
3. Security - Vulnerabilities และ input validation
4. Best Practices - Design patterns และ SOLID principles

โปรดให้คำแนะนำที่เฉพาะเจาะจงและมีตัวอย่างโค้ด
```

**3. ผลลัพธ์ที่ได้:**
- ✅ รู้บริบทโปรเจค (Next.js, TypeScript, Tailwind) จาก Instructions
- ✅ ตรวจสอบตามมาตรฐานที่กำหนด จาก Instructions
- ✅ ครอบคลุมทุกประเด็นสำคัญ จาก Reusable Prompt
- ✅ ให้ feedback ที่สอดคล้องกับ Tech Stack
- ✅ ใช้ Reusable Prompt ซ้ำได้กับโค้ดอื่นๆ

**สรุป:**
- Instructions = กำหนด "อย่างไร" (How) - โปรเจคใช้เทคอะไร
- Reusable Prompts = กำหนด "อะไร" (What) - ต้องการตรวจอะไร
- ใช้ร่วมกันได้ผลลัพธ์ที่สมบูรณ์และใช้ซ้ำได้

---

### 🎯 Best Practices การใช้ร่วมกัน

**1. ใส่สิ่งที่ซ้ำๆ ใน Instructions**
```markdown
# ❌ ไม่ดี - เขียนซ้ำใน Reusable Prompt ทุกไฟล์
code-review.md: "ตรวจโค้ด TypeScript + Tailwind นี้..."
refactoring.md: "Refactor โค้ด TypeScript + Tailwind นี้..."
test-gen.md: "สร้าง test สำหรับ TypeScript + Tailwind นี้..."

# ✅ ดี - ตั้งใน Instructions
Instructions: "ใช้ TypeScript และ Tailwind CSS"
code-review.md: "ช่วยตรวจสอบโค้ดนี้..."
refactoring.md: "ช่วย refactor โค้ดนี้..."
test-gen.md: "สร้าง tests สำหรับโค้ดนี้..."
```

**2. สร้าง Reusable Prompts สำหรับงานที่ทำบ่อย**
```markdown
# ✅ ดี - แยก Template ตามประเภทงาน
Reusable Prompts/
├── code-review.md        # ตรวจสอบโค้ด
├── refactoring.md        # ปรับปรุงโค้ด
├── api-documentation.md  # เขียน API docs
├── test-generation.md    # สร้าง tests
└── debugging.md          # แก้บัค

# แต่ละไฟล์มี Template ที่พร้อมใช้งาน
```

**3. Instructions = ระบบ, Reusable Prompts = เครื่องมือ**
```
Instructions       →  "ภาษาไทย, TypeScript, Next.js"  (ตั้งค่าระบบ)
Reusable Prompts  →  "Code Review Template"           (เครื่องมือพร้อมใช้)
```

---

## สรุป

### Instructions ใช้เมื่อ:
- ✅ ต้องการความสม่ำเสมอทั้งโปรเจค
- ✅ เป็นกฎที่ทุกคนต้องตาม
- ✅ ไม่อยากบอกซ้ำทุกครั้ง
- ✅ เป็นบริบทของโปรเจค

### Reusable Prompts ใช้เมื่อ:
- ✅ มีงานที่ทำซ้ำๆ บ่อยๆ
- ✅ ต้องการ Template มาตรฐาน
- ✅ แชร์วิธีการทำงานในทีม
- ✅ ลดเวลาเขียน Prompt ยาวๆ

### ใช้ร่วมกันเพื่อ:
- ✅ Instructions = กำหนด "อย่างไร" (How)
- ✅ Reusable Prompts = กำหนด "อะไร" (What)
- ✅ ได้ผลลัพธ์ที่สมบูรณ์แบบและใช้ซ้ำได้
