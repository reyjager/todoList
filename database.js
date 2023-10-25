const fs = require('fs');

let tasks = [];

// Load tasks from database.json
function loadTasks() {
    try {
        const data = fs.readFileSync('./data/database.json');
        tasks = JSON.parse(data);
    } catch (error) {
        tasks = [];
    }
}

// Save tasks to database.json
function saveTasks() {
    const data = JSON.stringify(tasks);
    fs.writeFileSync('./data/database.json', data);
}

// Add a new task
function addTask(task) {
    tasks.push(task);
}

// Get all tasks
function getTasks() {
    return tasks;
}

loadTasks();

module.exports = {
    loadTasks,
    saveTasks,
    addTask,
    getTasks,
};
