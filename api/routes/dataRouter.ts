import express from 'express';
import { fetchDataAndProcess, fetchDataAndProcessAll } from '../database.js';

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('The data routes are: \n'
        + '/raw/data \n'
        + '/raw/data/:eventCode \n'
        + '/raw/map \n'
        + '/raw/map/:eventCode \n'
        + '/comments/data \n'
        + '/comments/data/:eventCode \n'
        + '/comments/map \n'
        + '/comments/map/:eventCode \n'
        + '/numbers/data \n'
        + '/numbers/data/:eventCode \n'
        + '/numbers/map \n'
        + '/numbers/map/:eventCode \n'
        + '/all \n'
        + '/all/:eventCode \n'
        + '/maxMin/data \n'
        + '/maxMin/data/:eventCode \n'
        + '/maxMin/averages \n'
        + '/maxMin/averages/:eventCode');
});

router.get('/raw/data', (req, res) => {
    fetchDataAndProcessAll()
        .then((data : any) => {
            res.send(data.rawData);
        })
        .catch((error : any) => {
            console.log(error);
        });
});

router.get('/raw/data/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.rawData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/raw/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.rawDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/raw/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.rawDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/data', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.commentData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/data/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.commentData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.commentDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.commentDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/data', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.numData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/data/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.numData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.numDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.numDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/all', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.allData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/all/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.allData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/data', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.maxMin);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/data/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.maxMin);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/averages', (req, res) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/averages/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

export default router;
