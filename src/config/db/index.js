const mongoose = require('mongoose');

// connect db
async function connect() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/phuong_note_app-db`);
        console.log('connect successfully!!!');
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { connect };