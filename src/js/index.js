import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    console.log('TESTING!');
    res.send('Hello!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));