import express from 'express';
import indexRouter from './routes/index.js' ;
import usersRouter from './routes/users.js';
import db from './config.js';

const app = express();
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
});

export default app;