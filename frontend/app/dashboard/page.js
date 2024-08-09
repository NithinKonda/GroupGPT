"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [chats, setChats] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chats`);
        setChats(response.data);
      } catch (error) {
        console.error('Failed to fetch chats', error);
      }
    };

    fetchChats();
  }, []);

  const handleCreateChat = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat/create`);
      router.push(`/chat/${response.data.chatId}`);
    } catch (error) {
      console.error('Failed to create chat', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleCreateChat}>Create New Chat</button>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <a href={`/chat/${chat.id}`}>{chat.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
