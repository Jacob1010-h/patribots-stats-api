import express from 'express';
import { fetchDataAndProcess, getTeamRank, getTeamRankingArr } from '../Data.js';
import { getAllData } from '../JsonData.js';
var router = express.Router();

const noRoute =
    'Here are the available routes: /, /rankings/:team, /rankings/:eventCode/:team';

/* GET home page. */
router.get('/', function (req, res, next) {
    const response = noRoute;
    res.send(response);
});

router.get('/rankings', (req, res) => {
    fetchDataAndProcess("2024lake").then((data) => {
        res.send(data.teamRankingArr);
    }).catch((error) => {
        console.log(error);
    });
});

router.get('/rankings/:team', (req, res) => {
    const eventCode = "2024lake";
    fetchDataAndProcess(eventCode).then((data) => {
        var rank = getTeamRank(data.teamRankingArr, req.params.team);
        const response = {
            team: req.params.team,
            rank: rank,
            eventCode: eventCode
        }
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
});

router.get('/rankings/:eventCode/:team', (req, res) => {
    fetchDataAndProcess(req.params.eventCode).then((data) => {
        var rank = getTeamRank(data.teamRankingArr, req.params.team);
        const response = {
            team: req.params.team,
            rank: rank,
            eventCode: req.params.eventCode
        }
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
});

export default router;
