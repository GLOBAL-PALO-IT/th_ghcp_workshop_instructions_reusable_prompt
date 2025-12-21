import React, { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'
import JoinForm from './components/JoinForm.jsx'
import ChatRoom from './components/ChatRoom.jsx'

export default function App() {
  const [socket] = useState(() => io('http://localhost:8000', { transports: ['websocket'] }))
  const [joined, setJoined] = useState(false)
  const [room, setRoom] = useState('')
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])
  const [userList, setUserList] = useState([])
  const [typingUsers, setTypingUsers] = useState({})

  useEffect(() => {
    socket.on('join_success', (data) => {
      setRoom(data.room)
      setUserList(data.userList || [])
      setMessages(data.messages || [])
      setJoined(true)
    })
    socket.on('join_error', (e) => {
      alert(e?.message || 'เข้าร่วมห้องไม่สำเร็จ')
    })
    socket.on('user_list', ({ userList }) => setUserList(userList || []))
    socket.on('message', (msg) => setMessages((prev) => [...prev, msg]))
    socket.on('typing', ({ user }) => {
      setTypingUsers((prev) => ({ ...prev, [user]: Date.now() }))
    })

    return () => {
      socket.off('join_success')
      socket.off('join_error')
      socket.off('user_list')
      socket.off('message')
      socket.off('typing')
      socket.close()
    }
  }, [socket])

  // prune typing indicators
  useEffect(() => {
    const id = setInterval(() => {
      setTypingUsers((prev) => {
        const now = Date.now()
        const next = {}
        for (const [u, ts] of Object.entries(prev)) {
          if (now - ts < 1500) next[u] = ts
        }
        return next
      })
    }, 500)
    return () => clearInterval(id)
  }, [])

  const handleJoin = ({ username, room }) => {
    setUsername(username)
    socket.emit('join', { username, room })
  }

  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="w-full max-w-3xl h-[80vh] bg-white shadow rounded-xl overflow-hidden">
        {!joined ? (
          <JoinForm onSubmit={handleJoin} />
        ) : (
          <ChatRoom
            socket={socket}
            room={room}
            username={username}
            messages={messages}
            setMessages={setMessages}
            userList={userList}
            typingUsers={typingUsers}
          />
        )}
      </div>
    </div>
  )
}
