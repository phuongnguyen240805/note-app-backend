const noteRoutes = require('./noteRoutes');

function router(app) {

    // [GET]: /api/notes
    app.use('/api/notes', noteRoutes);

};

module.exports = router;
