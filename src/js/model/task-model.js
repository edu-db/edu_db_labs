const e = require('express');
const { response } = require('express');
const db = require('../connection');

const Task = function(task) {
    this.project_id = task.project_id;
    this.user_id = task.user_id;
    this.name = task.name;
    this.description = task.description;
    this.deadline = task.deadline;
    this.dependence = task.dependence;
    this.status = task.status;
}

Task.getAllTasks = result => {
    db.query(`SELECT * FROM tasks`, (err, res) => {
        if (err) {
            console.log('Error fetching all tasks');
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There're no tasks` });
        } else {
            result(null, res);
        }
    })
}

Task.getAllTasksInProject = (project_id, result) => {
    db.query(`SELECT * FROM tasks WHERE project_id=${project_id}`, (err, res) => {
        if (err) {
            console.log('Error fetching all tasks in project');
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There's no tasks in project #${project_id}` });
        } else {
            result(null, res);
        }
    })
}

Task.getTaskByID = (id, result) => {
    db.query(`SELECT * FROM tasks WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('Error fetching task with id: ', err);
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There's no task with id ${id}` });
        }
        result(null, res);
    })
}

Task.assignUser = (user_id, task_id, result) => {
    // Check if task with given id exists.
    db.query(`SELECT * FROM tasks WHERE id=${task_id}`, (err, res) => {
        if (err) {
            console.log('Error fetching task with id: ', err);
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `There's no task with id ${task_id}` });
        } else {
            // Check if user with given id exists.
            db.query(`SELECT * FROM users WHERE id=${user_id}`, (err, res) => {
                if (err) {
                    console.log('Error fetching task with id: ', err);
                    result(null, err);
                }
                if (res.length == 0) {
                    result(null, { status: false, message: `There's no user with id ${user_id}` });
                } else {
                    // Assign user to task.
                    db.query(`UPDATE tasks SET user_id=${user_id} WHERE id=${task_id}`, (err, res) => {
                        if (err) {
                            console.log(`Error assigning user #${user_id} to task #${task_id}`, err);
                            result(null, err);
                        }
                        result(null, { status: true, message: `Task #${task_id} was assigned to #${user_id}` });
                    })
                }
            })
        }
    })
}

Task.editTask = (taskData, result) => {
    id = taskData.task_id;
    // If deadline is updated, only then set it.
    if (taskData.deadline) {
        db.query(`UPDATE tasks SET name='${taskData.name}', description='${taskData.description}', deadline=STR_TO_DATE('${taskData.deadline}', '%d-%M-%Y %H:%i'), dependence=${taskData.dependence} WHERE id=${id}`, (err, resp) => {
            if (err) {
                result(null, err);
            } else {
                result(null, { status: false, message: `Task #${id} was successfully edited` });
            }
        })
    } else {
        db.query(`UPDATE tasks SET name='${taskData.name}', description='${taskData.description}', dependence=${taskData.dependence} WHERE id=${id}`, (err, res) => {
            if (err) {
                result(null, err);
            } else {
                result(null, { status: false, message: `Task #${id} was successfully edited` });
            }
        })
    }

}

module.exports = Task;