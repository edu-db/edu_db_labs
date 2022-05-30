const express = require('express');
const bodyParser = require('body-parser');

const usersRoute = require('./routes/users');
const tasksRoute = require('./routes/tasks');
const projectsRoute = require('./routes/projects');
/* ****************************************************** */

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/user', usersRoute);
app.use('/task', tasksRoute);
app.use('/project', projectsRoute);

app.get('/', (req, res) => {
    console.log('Connecting...');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));