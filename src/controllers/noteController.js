const Note = require('../model/noteModel');

class NoteController {

    // [GET]: /api/notes
    async getNotes(req, res, next) {
        try {
            const notes = await Note.find({});
            res.json(notes);
        } catch (err) {
            next(err);
        }
    }

};

module.exports = new NoteController;