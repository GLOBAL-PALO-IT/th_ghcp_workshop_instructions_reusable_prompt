---
applyTo: "**/*.js,**/*.jsx,**/*.css"
description: "รูปแบบการเขียนโค้ด: naming conventions, React patterns, Express middleware — ใช้กับไฟล์ JS/JSX/CSS"
---

# Code Style Guide

## Naming Conventions
- **ตัวแปรและฟังก์ชัน**: camelCase → `todoList`, `handleSubmit`, `fetchTodos`
- **Component**: PascalCase → `TodoForm`, `TodoList`, `TodoItem`
- **ไฟล์ Component**: PascalCase → `TodoForm.js`, `TodoItem.css`
- **ค่าคงที่**: UPPER_SNAKE_CASE → `API_URL`, `DEFAULT_PORT`
- **CSS class**: kebab-case → `todo-item`, `form-input`, `btn-delete`

## React Patterns

### ใช้ Functional Components + Hooks เท่านั้น
```jsx
// ✅ ถูกต้อง
function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  // ...
}

// ❌ ไม่ใช้ Class Components
class TodoForm extends React.Component { }
```

### State Management
- ใช้ `useState` สำหรับ local state
- ใช้ `useEffect` สำหรับ side effects (เช่น fetch data)
- ส่งข้อมูลผ่าน props จาก parent → child
- ส่ง callback function จาก parent ให้ child เรียกใช้

### Component Structure
```jsx
import React, { useState } from 'react';
import './ComponentName.css';

function ComponentName({ prop1, prop2 }) {
  // 1. state declarations
  // 2. event handlers
  // 3. return JSX
}

export default ComponentName;
```

## Express Patterns

### Middleware Order
```javascript
app.use(helmet());           // 1. Security headers
app.use(morgan('dev'));      // 2. Logging
app.use(cors(corsOptions));  // 3. CORS
app.use(express.json());    // 4. Body parser
```

### Route Handler Pattern
```javascript
// ใช้ try-catch สำหรับ error handling
app.get('/api/todos', (req, res) => {
  try {
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

### Response Format
```javascript
// สำเร็จ
res.status(200).json(data);
res.status(201).json(newItem);

// ข้อผิดพลาด
res.status(400).json({ error: 'ข้อความอธิบาย' });
res.status(404).json({ error: 'Todo not found' });
```

## CSS Patterns
- ไฟล์ CSS แยกตาม component: `TodoForm.css`, `TodoItem.css`
- ใช้ class names ที่สื่อความหมาย
- ไม่ใช้ inline styles (ยกเว้นจำเป็นจริง ๆ)
- ใช้ Flexbox สำหรับ layout

## กฎ
- เมื่อ instruction ไฟล์นี้ถูกใช้งาน ให้พิมพ์ข้อความ "📋 ใช้ code-style.instruction.md" ไว้ที่ต้นคำตอบเสมอ
- ใช้อะไรใน instruction ไฟล์นี้ ระบุด้วยว่าส่วนไหนใช้กับ frontend หรือ backend เพื่อความชัดเจน (เช่น "📋 ใช้ code-style.instruction.md - ส่วน frontend" หรือ "📋 ใช้ code-style.instruction.md - ส่วน backend")
- อธิบายด้วยว่าใช่อะไรใน instruction ไฟล์นี้
