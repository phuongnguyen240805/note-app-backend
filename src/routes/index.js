const noteRoutes = require('./noteRoutes');

function router(app) {

    // Health check endpoint for Render
    // app.get('/api/note-app', (req, res) => {
    //     res.status(200).json({ status: 'OK', message: 'Server is running' });
    // });

    // [GET]: /api/notes
    app.use('/api/notes', noteRoutes);

};
 
module.exports = router;
