import express from 'express';
import { fetchDataAndProcess, getTeamRankingArr } from '../Data.js';
import { getAllData } from '../jsonData.js';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('please specify a team number');
});

router.get('/:team', (req, res) => {
    fetchDataAndProcess("2024lake").then((data) => {
        var rank = getTeamRank(data.teamRankingArr, req.params.team);
        const response = {
            team: req.params.team,
            rank: rank
        }
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
});

router.get('/:eventCode/:team', (req, res) => {
    fetchDataAndProcess(req.params.eventCode).then((data) => {
        var rank = getTeamRank(data.teamRankingArr, req.params.team);
        const response = {
            team: req.params.team,
            rank: rank
        }
        res.send(response);
    }).catch((error) => {
        console.log(error);
    });
});

function getTeamRank(teamRankingArr, team) {
    for (let i = 0; i < teamRankingArr.length; i++) {
        if (teamRankingArr[i] == team) {
            return i + 1;
        }
    }
    return -1;
}

export default router;
