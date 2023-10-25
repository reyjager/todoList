const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Read tasks from the database
const database = require('./database');

app.get('/', (req, res) => {
    res.render('index', { tasks: database.getTasks() });
});

app.post('/create', (req, res) => {
    const newTask = req.body.task;
    database.addTask(newTask);
    res.redirect('/');
});

app.post('/save', (req, res) => {
    database.saveTasks();
    res.json({ message: 'Tasks saved to database.json' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
