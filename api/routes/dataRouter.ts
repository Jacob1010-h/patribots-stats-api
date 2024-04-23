import express, { NextFunction, Request, Response } from 'express';
import { fetchDataAndProcess, fetchDataAndProcessAll } from '../database.js';

var router = express.Router();

router.get('/', function (req : Request, res : Response, next : NextFunction) {
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

router.get('/raw/data', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data : any) => {
            res.send(data.rawData);
        })
        .catch((error : any) => {
            console.log(error);
        });
});

router.get('/raw/data/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.rawData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/raw/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.rawDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/raw/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.rawDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/data', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.commentData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/data/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.commentData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.commentDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comments/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.commentDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/data', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.numData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/data/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.numData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.numDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/numbers/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.numDataMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/all', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.allData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/all/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.allData);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/data', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.maxMin);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/data/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.maxMin);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/averages', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/maxMin/averages/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.maxMinOfAverages);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

export default router;
