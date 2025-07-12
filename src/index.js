require('dotenv').config({ path: '.env.local' })

const express = require('express');
const morgan = require('morgan');
const db = require('./config/db');
const router = require('./routes');
const cors = require('cors');

// Connect DB
db.connect();

const app = express();
const port = process.env.PORT;

// CORS: cho phép frontend gọi API
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000'
}));

// widdleware
app.use(express.json());
app.use(morgan('dev'));

router(app);

console.log('✅ CLIENT_ORIGIN:', process.env.CLIENT_ORIGIN);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/api/notes`);
});
