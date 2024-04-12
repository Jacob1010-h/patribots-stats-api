import express from 'express';
import indexRouter from './routes/rankings.js' ;
import db from './Config.js';

const app = express();
app.use(express.json());

app.use('/', indexRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
});

export default app;