const { response } = require('express');
const db = require('../connection');

const Project = function(project) {
    this.name = project.name;
    this.description = project.description;
}

Project.getAllProjects = result => {
    db.query('SELECT * FROM projects', (err, res) => {
        if (err) {
            console.log('Error fetching all projects');
            result(null, err);
        }
        result(null, res);
    })
}

Project.getProjectByID = (id, result) => {
    db.query(`SELECT * FROM projects WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log(`Error fetching project with id ${id}`);
            result(null, err);
        }
        if (res.length == 0) {
            result(null, { status: false, message: `Project #${id} not found` });
        } else {
            result(null, res);
        }
    })
}

Project.createProject = (projectData, result) => {
    db.query(`INSERT INTO projects (name, description) VALUES ('${projectData.name}', '${projectData.description}')`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, { status: false, message: err });
        } else {
            projectData.id = res.insertId;
            result(null, { status: true, message: 'Project created successfully', data: projectData });
        }
    });
}

Project.editProject = (id, newData, result) => {
    // Check if project exists.
    db.query(`SELECT * FROM projects WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, { status: false, message: err });
        } else {
            if (res == 0) {
                result(null, { status: false, message: `Project #${id} not found` });
            } else {
                // Update project info.
                db.query(`UPDATE projects SET name='${newData.name}', description='${newData.description}' WHERE id=${id}`, (err, res) => {
                    if (err) {
                        console.log('Something went wrong');
                        result(null, { status: false, message: err });
                    } else {
                        result(null, { status: true, message: 'Project was successfully updated', id: id, data: newData });
                    }
                })
            }
        }
    })
}

Project.deleteProject = (id, result) => {
    // Check if project exists.
    db.query(`SELECT * FROM projects WHERE id=${id}`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, { status: false, message: err });
        } else {
            if (res == 0) {
                result(null, { status: false, message: `Project #${id} not found` });
            } else {
                // Delete project.
                db.query(`DELETE FROM projects WHERE id=${id}`, (err, res) => {
                    if (err) {
                        console.log('Something went wrong');
                        result(null, { status: false, message: err });
                    } else {
                        result(null, { status: true, message: `Project #${id} was successfully deleted!` });
                    }
                })
            }
        }
    })
}

Project.assignUser = (project_id, user_id, result) => {
    // Check if project exists.
    db.query(`SELECT * FROM projects WHERE id=${project_id}`, (err, res) => {
        if (err) {
            console.log('Something went wrong');
            result(null, { status: false, message: err });
        }
        if (res.length == 0) {
            result(null, { status: false, message: `Project #${project_id} not found` });
        } else {
            // Check if user exists.
            db.query(`SELECT * FROM users WHERE id=${user_id}`, (err, res) => {
                if (err) {
                    console.log('Something went wrong');
                    result(null, { status: false, message: err });
                }
                if (res.length == 0) {
                    result(null, { status: false, message: `User #${user_id} not found` });
                } else {
                    // Check if user is not in a project already.
                    db.query(`SELECT user_id FROM project_pack WHERE project_id=${project_id}`, (err, res) => {
                        if (err) {
                            console.log('Something went wrong');
                            result(null, { status: false, message: err });
                        }
                        if (res.length > 0) {
                            result(null, { status: false, message: `User #${user_id} is already in project #${project_id}` });
                        } else {
                            // Assign user to project.
                            db.query(`INSERT INTO project_pack (project_id, user_id) VALUES (${project_id}, ${user_id})`, (err, res) => {
                                if (err) {
                                    console.log('Something went wrong');
                                    result(null, { status: false, message: err });
                                } else {
                                    result(null, { status: true, message: `User #${user_id} successfully added to project #${project_id}!` });
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

module.exports = Project;