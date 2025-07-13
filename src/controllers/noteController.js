const Note = require('../model/noteModel');

class NoteController {

    // [GET]: /api/notes
    async getNotes(req, res, next) {
        try {
            const notes = await Note.find({});
            res.json(notes);
        } catch (err) {
            res.status(500).json({ error: 'Lỗi server khi lấy danh sách ghi chú.' });
        }
    };

    // [GET] /api/notes/:id
    async getNoteById(req, res) {
        try {
            const note = await Note.findById(req.params.id);
            if (!note) {
                return res.status(404).json({ error: 'Không tìm thấy ghi chú.' });
            }
            res.json(note);
        } catch (err) {
            res.status(500).json({ error: 'Lỗi server khi lấy ghi chú.' });
        }
    };

    // [POST] /api/notes/
    async createNote(req, res) {
        try {
            const { text } = req.body;

            if (!text || text.trim() === '') {
                return res.status(400).json({ error: 'Thiếu dữ liệu text.' });
            }

            const newNote = await Note.create({ text });
            res.status(201).json({ success: true, note: newNote });
        } catch (err) {
            console.error('Lỗi khi thêm ghi chú:', err); // <-- thêm log debug
            res.status(500).json({ error: 'Không thể thêm ghi chú.' });
        }
    };


    // [PUT] /api/notes/:id
    async updateNote(req, res) {
        try {
            const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body);
            if (!updatedNote) return res.status(404).json({ error: 'Không tìm thấy ghi chú.' });
            res.json(updatedNote);
        } catch (err) {
            res.status(400).json({ error: 'Không thể cập nhật ghi chú.' });
        }
    };

    // [DELETE] /api/notes/:id
    async deleteNote(req, res) {
        try {
            const id = req.params.id;
            const deletedNote = await Note.findByIdAndDelete(id);

            if (!deletedNote) return res.status(404).json({ error: 'Không tìm thấy ghi chú.' });

            res.json({
                message: 'Xoá thành công.',
                id: id,
            });
        } catch (err) {
            res.status(500).json({ error: 'Lỗi khi xoá ghi chú.' });
        }
    };

    // [PATCH] /api/notes/:id
    async completedNote(req, res) {
        try {
            const note = await Note.findByIdAndUpdate(
                req.params.id,
                req.body,           // chỉ cần { isComplete: true/false }
            );

            if (!note) return res.status(404).json({ message: 'Không tìm thấy ghi chú' });
            res.json(note);
        } catch (error) {
            res.status(500).json({ message: 'Lỗi cập nhật ghi chú', error: error.message });
        }
    };

};

module.exports = new NoteController;