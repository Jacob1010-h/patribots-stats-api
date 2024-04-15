import express from 'express';
import landingRouter from './routes/landing.js';
import dataRouter from './routes/dataRouter.js';
import teamsRouter from './routes/teams.js';

const app = express();
app.use(express.json());

app.use('/', landingRouter);
app.use('/data', dataRouter);
app.use('/teams', teamsRouter);


const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
});

export default app;