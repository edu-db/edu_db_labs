const TaskModel = require('../model/task-model');
const db = require('../connection');

exports.getAllTasks = (req, res) => {
    console.log('Fetching all tasks...');
    TaskModel.getAllTasks((err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.send(tasks);
    })
}

exports.getAllTasksInProject = (req, res) => {
    console.log(`Fetching all tasks from project #${req.params.id}`);
    TaskModel.getAllTasksInProject(req.params.id, (err, tasks) => {
        if (err) {
            res.send(err);
        }
        res.send(tasks);
    })
}

exports.getTaskByID = (req, res) => {
    console.log('Fetching task with id', req.params.id);
    TaskModel.getTaskByID(req.params.id, (err, task) => {
        if (err) {
            res.send(err);
        }
        console.log('Successfully fetched task with id', req.params.id);
        res.send(task);
    })
}

exports.assignUser = (req, res) => {
    console.log('Assigning user...');
    TaskModel.assignUser(req.body.user_id, req.body.task_id, (err, response) => {
        if (err) {
            res.send(err);
        }
        console.log(`Successfully assigned user #${req.body.user_id} to task #${req.body.task_id}!`);
        res.send(response);
    })
}

exports.editTask = (req, res) => {
    console.log('Editing task...');
    task_id = req.params.id;
    // Check if the task with given id exists.
    db.query(`SELECT name, description FROM tasks WHERE id=${task_id}`, (err, resp) => {
        if (err) {
            res.send(err);
        } else if (res.length == 0) {
            res.send({ status: false, message: `Task #${task_id} not found` });
        } else {
            initial_task_data = resp[0];
            request_task_data = req.body;
            // Preserve initial task data if new data is not set in request.
            let taskData = {
                task_id: task_id,
                name: request_task_data.name ? request_task_data.name : initial_task_data.name,
                description: request_task_data.description ? request_task_data.description : initial_task_data.description,
                deadline: request_task_data.deadline ? request_task_data.deadline : null,
                dependence: request_task_data.dependence ? request_task_data.dependence : task_id
            }
            const Task = new TaskModel(taskData);
            TaskModel.editTask(taskData, (err, response) => {
                if (err) {
                    res.send(err);
                }
                res.send(response);
            })
        }
    })
}