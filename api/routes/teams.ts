import express, { NextFunction, Request, Response } from 'express';
import { fetchDataAndProcess, fetchDataAndProcessAll, getTeamRank } from '../database.js';

var router = express.Router();

router.get('/', function (req : Request, res : Response, next : NextFunction) {
    res.send('The team routes are:'
        + '\n/comment/map'
        + '\n/comment/map/:eventCode'
        + '\n/num/map'
        + '\n/num/map/:eventCode'
        + '\n/big/map'
        + '\n/big/map/:eventCode'
        + '\n/big/mapSplit'
        + '\n/big/mapSplit/:eventCode'
        + '\n/average/map'
        + '\n/average/map/:eventCode'
        + '\n/rankings/arr'
        + '\n/rankings/arr/:eventCode'
        + '\n/rankings/json'
        + '\n/rankings/json/:eventCode'
        + '\n/rankings/table'
        + '\n/rankings/table/:eventCode'
        + '\n/rankings/team/:team'
        + '\n/rankings/team/:team/:eventCode');
});

router.get('/comment/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.commentTeamMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/comment/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.commentTeamMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/num/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.numTeamMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/num/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.numTeamMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/big/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.bigTeamMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/big/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.bigTeamMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/big/mapSplit', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.bigTeamMapSplit);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/big/mapSplit/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.bigTeamMapSplit);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/average/map', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.teamAverageMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/average/map/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.teamAverageMap);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/arr', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.teamRankingArr);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/arr/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.teamRankingArr);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/json', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.teamRankingJson);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/json/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.teamRankingJson);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/table', (req : Request, res : Response) => {
    fetchDataAndProcessAll()
        .then((data: any) => {
            res.send(data.rankingTable);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/table/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            res.send(data.rankingTable);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/team/:team', (req : Request, res : Response) => {
    const eventCode = '2024lake';
    fetchDataAndProcess(eventCode)
        .then((data: any) => {
            var rank = getTeamRank(data.teamRankingArr, req.params.team);
            const response = {
                team: req.params.team,
                rank: rank,
                eventCode: eventCode,
            };
            res.send(response);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

router.get('/rankings/team/:team/:eventCode', (req : Request, res : Response) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data: any) => {
            var rank = getTeamRank(data.teamRankingArr, req.params.team);
            const response = {
                team: req.params.team,
                rank: rank,
                eventCode: req.params.eventCode,
            };
            res.send(response);
        })
        .catch((error: any) => {
            console.log(error);
        });
});

export default router;