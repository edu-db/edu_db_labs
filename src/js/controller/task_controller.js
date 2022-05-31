const TaskModel = require('../model/task-model');

exports.getAllTasks = (req, res) => {
    console.log(`Fetching all tasks from project #${req.params.id}`);
    TaskModel.getAllTasks(req.params.id, (err, tasks) => {
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