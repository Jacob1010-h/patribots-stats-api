import express from 'express';
import { fetchDataAndProcess, fetchDataAndProcessAll } from '../database.js';

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('The data routes are: /raw, /raw/map, /comments, /comments/map, /numbers, /numbers/map, /all, /maxMin, /maxMin/averages');
});

router.get('/raw', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.rawData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/raw/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.rawData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/raw/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.rawDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/raw/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.rawDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comments', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.commentData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comments/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.commentData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comments/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.commentDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comments/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.commentDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/numbers', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.numData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/numbers/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.numData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/numbers/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.numDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/numbers/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.numDataMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/all', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.allData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/all/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.allData);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/maxMin', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.maxMin);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/maxMin/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.maxMin);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/maxMin/averages', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/maxMin/averages/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
