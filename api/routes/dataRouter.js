import express from 'express';
import { fetchDataAndProcess } from '../database.js';

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('The data routes are: /raw, /raw/map, /comments, /comments/map, /numbers, /numbers/map, /all');
});

router.get('/raw', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.rawData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/raw/map', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.rawDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comments', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.commentData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comments/map', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.commentDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/numbers', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.numData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/numbers/map', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.numDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/all', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.allData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/maxMin', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.maxMin);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/maxMin/averages', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
