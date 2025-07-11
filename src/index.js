const express = require('express');
const morgan = require('morgan');
const db = require('./config/db');
const router = require('./routes');
const cors = require('cors');

// Connect DB
db.connect();

const app = express();
const port = 3030;

// ✅ Phải đặt CORS middleware trước
app.use(cors({ origin: 'http://localhost:2026' }));

// widdleware
app.use(express.json());
app.use(morgan('dev'));

router(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/api/notes`)
});
