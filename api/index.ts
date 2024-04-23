import express, { NextFunction, Request, Response } from 'express';
import landingRouter from './routes/landing.js';
import dataRouter from './routes/dataRouter.js';
import teamsRouter from './routes/teams.js';
import 'dotenv/config.js'


const app = express();
app.use(express.json());

app.use((req : Request, res : Response, next : NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', landingRouter);
app.use('/data', dataRouter);
app.use('/teams', teamsRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
});

export default app;