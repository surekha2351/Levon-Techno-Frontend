require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
  } else {
    console.log('Connected to MongoDB');
  }
});

// Define routes
const authRoutes = require('./routes/auth');
const teacherRoutes = require('./routes/teachers');
const studentRoutes = require('./routes/students');

app.use('/api/auth', authRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);

// Error handling
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
