import express from 'express';
import { fetchDataAndProcess, getTeamRank } from '../database.js';

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('The team routes are: \n /comment/map \n /comment/map/:eventCode \n /num/map \n /num/map/:eventCode \n /big/map \n /big/map/:eventCode \n /big/map/split \n /big/map/split/:eventCode \n /average/map \n /average/map/:eventCode \n /rankings \n /rankings/:eventCode \n /rankings/json \n /rankings/json/:eventCode \n /rankings/table \n /rankings/table/:eventCode \n /rankings/:team \n /rankings/:team/:eventCode \n');
});

router.get('/comment/map', (req, res) => {
    fetchDataAndProcess('2024lake')
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
    fetchDataAndProcess('2024lake')
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
    fetchDataAndProcess('2024lake')
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

router.get('/big/map/split', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.bigTeamMapSplit);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/big/map/split/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.bigTeamMapSplit);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/average/map', (req, res) => {
    fetchDataAndProcess('2024lake')
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

router.get('/rankings', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.teamRankingArr);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/:eventCode', (req, res) => {
    fetchDataAndProcess(req.params.eventCode)
        .then((data) => {
            res.send(data.teamRankingArr);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get('/rankings/json', (req, res) => {
    fetchDataAndProcess('2024lake')
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
    fetchDataAndProcess('2024lake')
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

router.get('/rankings/:team', (req, res) => {
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

router.get('/rankings/:team/:eventCode', (req, res) => {
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