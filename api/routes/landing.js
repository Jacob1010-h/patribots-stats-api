import express from 'express';

var router = express.Router();

const noRoute =
    'Here are the available routes: \n' 
    + '/data \n'
    + '/teams \n'
    + '/landing \n';

router.get('/', function (req, res, next) {
    const response = noRoute;
    res.send(response);
});

export default router;