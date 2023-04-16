
const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    },{ timestamps: true });

    const Note = mongoose.model('Note', notesSchema);

    module.exports = Note;