const e = require('express');
const { response } = require('express');
const ArtifactModel = require('../model/artifact-model');
const db = require('../connection');

exports.getAllArtifacts = (req, res) => {
    console.log('Fetching all artifacts...');
    ArtifactModel.getAllArtifacts(req.params.id, (err, artifacts) => {
        if (err) {
            res.send(err);
        }
        res.send(artifacts);
    })
}

exports.getArtifact = (req, res) => {
    console.log('Fetching artifact...');
    ArtifactModel.getArtifact(req.params.artifact_id, (err, artifact) => {
        if (err) {
            res.send(err);
        }
        res.send(artifact);
    })
}

exports.createArtifact = (req, res) => {
    console.log('Creating artifact...');
    project_id = req.params.id;
    db.query(`SELECT * FROM projects WHERE id=${project_id}`, (err, resp) => {
        if (err) {
            res.send(err);
        } else if (resp.length == 0) {
            res.send({ status: false, message: `Project #${project_id} not found!` });
        } else {
            let artifact = {
                name: req.body.name,
                description: req.body.description,
                link: req.body.link,
                project_id: project_id
            }
            const Artifact = new ArtifactModel(artifact);
            ArtifactModel.createArtifact(Artifact, (err, new_artifact) => {
                if (err) {
                    res.send(err);
                }
                res.send(new_artifact);
            })
        }
    })
}

exports.editArtifact = (req, res) => {
    console.log('Editing artifact...');
    project_id = req.params.id;
    db.query(`SELECT * FROM projects WHERE id=${project_id}`, (err, resp) => {
        if (err) {
            res.send(err);
        } else if (resp.length == 0) {
            res.send({ status: false, message: `Project #${project_id} not found!` });
        } else {
            artifact_id = req.params.artifact_id;
            db.query(`SELECT * from artifacts WHERE id=${artifact_id} AND project_id=${project_id}`, (err, resp) => {
                if (err) {
                    res.send(err);
                } else if (resp.length == 0) {
                    res.send({ status: false, message: `Artifact #${artifact_id} not found!` });
                } else {
                    request_data = req.body;
                    initial_data = resp[0];
                    let artifact = {
                        name: request_data.name ? request_data.name : initial_data.name,
                        description: request_data.description ? request_data.description : initial_data.description,
                        link: request_data.link ? request_data.link : initial_data.link,
                    }
                    const Artifact = new ArtifactModel(artifact);
                    ArtifactModel.editArtifact(artifact_id, Artifact, (err, response) => {
                        if (err) {
                            res.send(err);
                        }
                        res.send(response);
                    })
                }
            })
        }
    })
}

exports.deleteArtifact = (req, res) => {
    console.log('Deleting artifact...');
    project_id = req.params.id;
    db.query(`SELECT * FROM projects WHERE id=${project_id}`, (err, resp) => {
        if (err) {
            res.send(err);
        } else if (resp.length == 0) {
            res.send({ status: false, message: `Project #${project_id} not found!` });
        } else {
            artifact_id = req.params.artifact_id;
            db.query(`SELECT * FROM artifacts WHERE id=${artifact_id}`, (err, resp) => {
                if (err) {
                    res.send(err);
                } else if (resp.length == 0) {
                    res.send({ status: false, message: `Artifact #${artifact_id} not found!` });
                } else {
                    ArtifactModel.deleteArtifact(artifact_id, (err, response) => {
                        if (err) {
                            res.send(err);
                        }
                        res.send(response);
                    })
                }
            })
        }
    })
}