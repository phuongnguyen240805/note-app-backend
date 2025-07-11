const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    isCompleted: { type: Boolean, default: false },
    text: { type: String, required: true, maxLength: 600 },
}, {
    timestamps: true,
});

// Truyền rõ tên collection 'note' vào đây (vì mặc định sẽ là 'notes')
module.exports = mongoose.model('Note', noteSchema, 'note');
