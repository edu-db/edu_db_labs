const e = require('express');
const { response } = require('express');
const ActionsModel = require('../model/actions-model');
const TaskModel = require('../model/task-model');
const db = require('../connection');

exports.createTask = (req, res) => {
    console.log('Creating task...');
    const Task = new TaskModel(req.body);
    acted_at = getCurrentDateTime();
    const Action = new ActionsModel(
        Task.task_id,
        Task.user_id,
        acted_at,
        null,
        'TO DO'
    );
    ActionsModel.createTask(Task, Action, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.send(task);
    })
}

exports.updateTask = (req, res) => {
    console.log('Updating task...');
    reqData = req.body;
    acted_at = getCurrentDateTime();
    let action = {
        task_id: reqData.task_id,
        user_id: reqData.user_id,
        acted_at: acted_at,
        previous_status: null,
        current_status: reqData.new_status
    }
    const Action = new ActionsModel(action);
    ActionsModel.updateTask(Action, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

exports.deleteTask = (req, res) => {
    console.log('Deleting task...');
    reqData = req.body;
    acted_at = getCurrentDateTime();
    let action = {
        task_id: req.params.id,
        user_id: reqData.user_id,
        acted_at: acted_at,
        previous_status: null,
        current_status: 'DELETED'
    }
    const Action = new ActionsModel(action);
    ActionsModel.deleteTask(Action, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

function getCurrentDateTime() {
    let date = new Date(Date.now());
    let day = date.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    acted_at = `${day}-${month}-${year} ${hours}:${minutes}`;
    return acted_at;
}