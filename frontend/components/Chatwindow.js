import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL);

  useEffect(() => {
    socket.emit('joinChat', chatId);

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [chatId]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('sendMessage', { chatId, message: input });
      setInput('');
    }
  };

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
