const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');

// // Cập nhật ghi chú theo ID
// router.put('/:id', noteController.updateNote);

// // Xoá ghi chú theo ID
// router.delete('/:id', noteController.deleteNote);

// Tạo ghi chú mới
router.post('/add', noteController.createNote);

router.get('/', noteController.getNotes);

module.exports = router;
