// backend/controllers/chatController.js

// Dummy implementation for chat management
const chats = []; // In-memory store; replace with a database in production

exports.getChats = (req, res) => {
  res.json(chats);
};

exports.createChat = (req, res) => {
  const newChat = { id: Date.now().toString(), name: 'New Chat' }; // Replace with real chat creation logic
  chats.push(newChat);
  res.json(newChat);
};
