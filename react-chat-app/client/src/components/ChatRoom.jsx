import React, { useEffect, useMemo, useRef, useState } from 'react'
import { escapeText } from '../utils/sanitize.js'

export default function ChatRoom({ socket, room, username, messages, setMessages, userList, typingUsers }) {
  const [text, setText] = useState('')
  const listRef = useRef(null)
  const canTypeRef = useRef(true)

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages])

  const typingLine = useMemo(() => {
    const names = Object.keys(typingUsers).filter((u) => u !== username)
    if (names.length === 0) return ''
    return `${names.slice(0, 3).join(', ')} กำลังพิมพ์...`
  }, [typingUsers, username])

  const sendTyping = () => {
    if (!canTypeRef.current) return
    canTypeRef.current = false
    socket.emit('typing')
    setTimeout(() => (canTypeRef.current = true), 600)
  }

  const sendMessage = () => {
    const t = text.trim()
    if (!t) return
    socket.emit('message', { text: t })
    setText('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    } else {
      sendTyping()
    }
  }

  return (
    <div className="h-full flex flex-col">
      <header className="px-4 py-3 border-b flex items-center justify-between bg-gray-50">
        <div>
          <div className="text-sm text-gray-500">ห้อง</div>
          <div className="font-semibold">{room}</div>
        </div>
        <div className="text-sm text-gray-600">คุณคือ <span className="font-medium">{username}</span></div>
      </header>
      <div className="flex-1 grid grid-cols-12 gap-0">
        <aside className="hidden md:block col-span-3 border-r p-3 bg-gray-50">
          <div className="font-semibold mb-2">ผู้ใช้ออนไลน์ ({userList.length})</div>
          <ul className="space-y-1 text-sm">
            {userList.map((u) => (
              <li key={u} className="px-2 py-1 rounded bg-white border">{u}</li>
            ))}
          </ul>
        </aside>
        <main className="col-span-12 md:col-span-9 flex flex-col">
          <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((m) => {
              const mine = m.user === username
              return (
                <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] px-3 py-2 rounded-lg shadow text-sm ${mine ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
                    {!mine && <div className="text-[10px] opacity-75 mb-0.5">{m.user}</div>}
                    <div>{escapeText(m.text)}</div>
                    <div className={`text-[10px] opacity-75 mt-1 ${mine ? 'text-blue-100' : 'text-gray-600'}`}>{new Date(m.ts).toLocaleTimeString()}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="px-4 h-6 text-xs text-gray-500">{typingLine}</div>
          <div className="p-3 border-t bg-gray-50 flex gap-2">
            <input
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
              placeholder="พิมพ์ข้อความ..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
              maxLength={500}
            />
            <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">ส่ง</button>
          </div>
        </main>
      </div>
    </div>
  )
}
