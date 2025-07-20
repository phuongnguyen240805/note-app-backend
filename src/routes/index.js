const noteRoutes = require('./noteRoutes');

function router(app) {

    // [GET]: /api/notes
    app.use('/api/note-app', noteRoutes);

};
 
module.exports = router;
