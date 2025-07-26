const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const router = require('./routes');

// Load biến môi trường từ file .env
dotenv.config();

// Kết nối DB
db.connect();

const app = express();
const port = process.env.PORT || 3000;

// CORS: Cho phép các origin gọi API
const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || [];

app.use(cors({
  origin: allowedOrigins,
}));

app.use(express.json());
app.use(morgan('dev'));
router(app);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
