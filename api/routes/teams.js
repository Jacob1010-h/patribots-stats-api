import express from 'express';
import { fetchDataAndProcess, fetchDataAndProcessAll, getTeamRank } from '../database.js';

var router = express.Router();

router.get('/', function (req, res, next) {
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

router.get('/comment/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.commentTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/comment/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.commentTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/num/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.numTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/num/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.numTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/big/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.bigTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/big/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.bigTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/big/mapSplit', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.bigTeamMapSplit);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/big/mapSplit/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.bigTeamMapSplit);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/average/map', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.averageTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/average/map/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.averageTeamMap);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/arr', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.teamRankingArr);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/arr/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.teamRankingArr);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/json', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.teamRankingJson);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/json/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.teamRankingJson);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/table', (req, res) => {
    fetchDataAndProcessAll()
        .then((data) => {
            res.send(data.rankingTable);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/table/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.rankingTable);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/team/:team', (req, res) => {
    const eventCode = '2024lake';
    fetchDataAndProcess(eventCode)
        .then((data) => {
            var rank = getTeamRank(data.teamRankingArr, req.params.team);
            const response = {
                team: req.params.team,
                rank: rank,
                eventCode: eventCode,
            };
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/team/:team/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            var rank = getTeamRank(data.teamRankingArr, req.params.team);
            const response = {
                team: req.params.team,
                rank: rank,
                eventCode: req.params.eventCode,
            };
            res.send(response);
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;