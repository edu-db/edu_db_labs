const e = require('express');
const { response } = require('express');
const ProjectModel = require('../model/project-model');

exports.getAllProjects = (req, res) => {
    console.log('Fetching all projects...');
    ProjectModel.getAllProjects((err, projects) => {
        if (err) {
            res.send(err);
        }
        res.send(projects);
    })
}

exports.getProjectByID = (req, res) => {
    console.log('Fetching project...');
    ProjectModel.getProjectByID(req.params.id, (err, project) => {
        if (err) {
            res.send(err);
        }
        res.send(project);
    })
}

exports.createProject = (req, res) => {
    console.log('Creating project...');
    ProjectModel.createProject(req.body, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

exports.editProject = (req, res) => {
    console.log('Editing project...');
    ProjectModel.editProject(req.params.id, req.body, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

exports.deleteProject = (req, res) => {
    console.log(`Deleting project #${req.params.id}...`);
    ProjectModel.deleteProject(req.params.id, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}

exports.assignUser = (req, res) => {
    console.log('Assigning user to project...');
    ProjectModel.assignUser(req.params.id, req.body.user_id, req.body.role, (err, response) => {
        if (err) {
            res.send(err);
        }
        res.send(response);
    })
}