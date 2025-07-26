const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');

// Lấy tất cả ghi chú
router.get('/', noteController.getNotes);             

// Tạo ghi chú mới
router.post('/', noteController.createNote);            

// Lấy ghi chú theo ID
router.get('/:id', noteController.getNoteById);     

// Cập nhật ghi chú theo ID
router.put('/:id', noteController.updateNote);         

// Đánh dấu ghi chú theo ID
router.patch('/:id', noteController.completedNote);
    
// Xoá ghi chú theo ID
router.delete('/:id', noteController.deleteNote);    

module.exports = router;
