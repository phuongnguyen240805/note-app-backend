const Note = require('../model/noteModel');

class NoteController {

    // [GET]: /api/notes
    async getNotes(req, res, next) {
        try {
            const notes = await Note.find({});
            res.json(notes);
        } catch (err) {
            next(err);
        };
    };

    // [POST] /api/notes/add
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
    }


    // // [PUT] /api/notes/:id
    // async updateNote(req, res) {
    //     try {
    //         const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    //             new: true,
    //         });
    //         if (!updatedNote) return res.status(404).json({ error: 'Không tìm thấy ghi chú.' });
    //         res.json(updatedNote);
    //     } catch (err) {
    //         res.status(400).json({ error: 'Không thể cập nhật ghi chú.' });
    //     }
    // }

    // // [DELETE] /api/notes/:id
    // async deleteNote(req, res) {
    //     try {
    //         const deletedNote = await Note.findByIdAndDelete(req.params.id);
    //         if (!deletedNote) return res.status(404).json({ error: 'Không tìm thấy ghi chú.' });
    //         res.json({ message: 'Xoá thành công.' });
    //     } catch (err) {
    //         res.status(500).json({ error: 'Lỗi khi xoá ghi chú.' });
    //     }
    // }

};

module.exports = new NoteController;