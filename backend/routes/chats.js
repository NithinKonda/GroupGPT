// backend/routes/chats.js

const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Fetch chats
router.get('/', chatController.getChats);

// Create a new chat
router.post('/create', chatController.createChat);

module.exports = router;
