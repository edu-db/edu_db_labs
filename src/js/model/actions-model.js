const { response } = require('express');
const db = require('../connection');

const Action = function(action) {
    this.task_id = action.task_id;
    this.user_id = action.user_id;
    this.acted_at = action.acted_at;
    this.previous_status = action.previous_status;
    this.current_status = action.current_status;
}

Action.createTask = (taskData, acted_at, result) => {
    user_id = taskData.user_id;
    db.query(`INSERT INTO tasks (project_id, user_id, name, description, deadline, dependence, status)
        VALUES (${taskData.project_id}, ${user_id}, '${taskData.name}', '${taskData.description}', STR_TO_DATE('${taskData.deadline}', '%d-%M-%Y %H:%i'), 1, 'TO DO')`, (err, res) => {
        if (err) {
            result(null, { status: false, message: err });
        } else {
            task_id = res.insertId;
            db.query(`UPDATE tasks SET dependence=${task_id} WHERE id=${task_id}`, (err, res) => {
                if (err) {
                    result(null, { status: false, message: err });
                }
            });
            db.query(`INSERT INTO actions (task_id, user_id, acted_at, previous_status, current_status)
                VALUES (${task_id}, ${user_id}, STR_TO_DATE('${acted_at}', '%d-%M-%Y %H:%i'), ${null}, '${"TO DO"}')`, (err, res) => {
                if (err) {
                    result(null, { status: false, message: err });
                } else {
                    result(null, { status: true, message: 'Task created', id: task_id, data: taskData });
                }
            })
        }
    })
}

Action.updateTask = (actionData, result) => {
    db.query(`SELECT id FROM actions WHERE task_id=${actionData.task_id}`, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
            last_action_id = res[res.length - 1].id;
            db.query(`SELECT current_status FROM actions WHERE id=${last_action_id}`, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    actionData.previous_status = res[0].current_status;
                    db.query(`SELECT * FROM tasks WHERE id=${actionData.task_id}`, (err, res) => {
                        if (err) {
                            result(null, { status: false, message: err });
                        }
                        if (res.length == 0) {
                            result(null, { status: false, message: `Task #${taskData.task_id} not found` });
                        } else {
                            db.query(`UPDATE tasks SET status='${actionData.current_status}' WHERE id=${actionData.task_id}`, (err, res) => {
                                if (err) {
                                    result(null, { status: false, message: err });
                                } else {
                                    db.query(`INSERT INTO actions (task_id, user_id, acted_at, previous_status, current_status)
                                        VALUES (${actionData.task_id}, ${actionData.user_id}, STR_TO_DATE('${actionData.acted_at}', '%d-%M-%Y %H:%i'), '${actionData.previous_status}', '${actionData.current_status}')`, (err, res) => {
                                        if (err) {
                                            result(null, { status: false, message: err });
                                        } else {
                                            result(null, { status: true, message: `Task #${actionData.task_id} updated successfully` });
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

module.exports = Action;