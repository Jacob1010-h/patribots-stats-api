import express from 'express';
import { fetchDataAndProcess } from '../database.js';

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('The team routes are: /rankings, /rankings/table, /rankings/:team, /rankings/:eventCode/:team, /comment/map, /num/map, /big/map, /big/map/split, /average/map');
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

router.get('/num/map', (req, res) => {
    fetchDataAndProcess('2024lake')
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

router.get('/big/map/split', (req, res) => {
    fetchDataAndProcess('2024lake')
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

router.get('/rankings', (req, res) => {
    fetchDataAndProcess('2024lake')
        .then((data) => {
            res.send(data.teamRankingArr);
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

router.get('/rankings/:eventCode/:team', (req, res) => {
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