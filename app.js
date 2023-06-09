const express = require('express');
const connectDB=require('./db');
const Note = require('./notes');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
   res.send('Notes API')
})

app.get('/health', (req, res) => {
    if(mongoose.connection.readyState === 1){
      res.status(200).send('Database connection success');
    }
    else {
      res.status(400).send('Database connection failed');
    }
  });


app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find().select('title body createdAt updatedAt');
        res.json(notes);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/notes/:id', async (req, res) => {    //http://localhost:3000/notes/1
    try {
        const note = await Note.findById(req.params.id);
        if (!note) throw new Error('Note not found');
        res.json(note);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/notes', async (req, res) => {    //http://localhost:3000/notes/1
    try {
        const {title, body} = req.body;
        const note = new Note({title, body});
        await note.save();
        res.json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

app.put('/notes/:id', async (req, res) => {     //http://localhost:3000/notes/1
    try {
      const note = await Note.findByIdAndUpdate(req.params.id, { ...req.body, updatedAt: new Date() }, { new: true }).select('title body createdAt updatedAt');
      if (!note) throw new Error('Note not found');
      res.json({ success: true });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.delete('/notes/:id', async (req, res) => {    //http://localhost:3000/notes/1
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) throw new Error('Note not found');
        res.json({success: true});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 3000;

app.listen(port, () => {
    console.log("API server started on port 3000");
})
