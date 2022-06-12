const { response } = require('express');
const db = require('../connection');

const Artifact = function(artifact) {
    this.name = artifact.name;
    this.description = artifact.description;
    this.link = artifact.link;
    this.project_id = artifact.project_id;
}

Artifact.getAllArtifacts = (project_id, result) => {
    db.query(`SELECT * FROM artifacts WHERE project_id=${project_id}`, (err, res) => {
        if (err) {
            result(null, err);
        } else if (res.length == 0) {
            result(null, { status: false, message: `There no artifacts in project #${project_id}` });
        } else {
            result(null, res);
        }
    })
}

Artifact.getArtifact = (artifact_id, result) => {
    db.query(`SELECT * FROM artifacts WHERE id=${artifact_id}`, (err, res) => {
        if (err) {
            result(null, err);
        } else if (res.length == 0) {
            result(null, { status: false, message: `Artifact #${artifact_id} not found` });
        } else {
            result(null, res);
        }
    })
}

Artifact.createArtifact = (artifactData, result) => {
    db.query(`INSERT INTO artifacts (name, description, link, project_id)
        VALUES ('${artifactData.name}', '${artifactData.description}', '${artifactData.link}', ${artifactData.project_id})`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            new_artifact_id = res.insertId;
            result(null, { status: true, message: 'Artifact successfully created!', id: res.insertId, data: artifactData });
        }
    })
}

Artifact.editArtifact = (artifact_id, artifactData, result) => {
    db.query(`UPDATE artifacts SET name='${artifactData.name}', description='${artifactData.description}', link='${artifactData.link}' WHERE id=${artifact_id}`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, { status: true, message: `Artifact #${artifact_id} was updated successfully` });
        }
    })
}

Artifact.deleteArtifact = (artifact_id, result) => {
    db.query(`DELETE FROM artifacts WHERE id=${artifact_id}`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, { status: true, message: `Artifact #${artifact_id} was successfully deleted!` });
        }
    })
}

module.exports = Artifact;