import React, { useState } from 'react'

export default function JoinForm({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('general')

  const handleSubmit = (e) => {
    e.preventDefault()
    const u = username.trim()
    const r = room.trim()
    if (!u || !r) return
    onSubmit({ username: u, room: r })
  }

  return (
    <div className="p-6 h-full flex flex-col justify-center">
      <h1 className="text-2xl font-semibold mb-6 text-center">เข้าร่วมห้องแชท</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto w-full">
        <div>
          <label className="block mb-1 text-sm font-medium">ชื่อผู้ใช้</label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="เช่น: alice"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={32}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">ห้อง</label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="เช่น: general"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            maxLength={32}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          เข้าร่วม
        </button>
      </form>
    </div>
  )
}
