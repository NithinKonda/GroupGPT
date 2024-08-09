// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chats');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/chats', chatRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
