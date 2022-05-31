const { response } = require('express');
const db = require('../connection');

const Action = function(action) {
    this.task_id = action.task_id;
    this.user_id = action.user_id;
    this.acted_at = Date(Date.now());
    this.previous_status = action.previous_status;
    this.current_status = action.current_status;
}