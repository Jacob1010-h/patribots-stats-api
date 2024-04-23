"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_js_1 = require("../database.js");
var router = express_1.default.Router();
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
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.rawData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/raw/data/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.rawData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/raw/map', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.rawDataMap);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/raw/map/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.rawDataMap);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/comments/data', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.commentData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/comments/data/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.commentData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/comments/map', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.commentDataMap);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/comments/map/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.commentDataMap);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/numbers/data', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.numData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/numbers/data/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.numData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/numbers/map', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.numDataMap);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/numbers/map/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.numDataMap);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/all', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.allData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/all/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.allData);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/maxMin/data', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.maxMin);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/maxMin/data/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.maxMin);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/maxMin/averages', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)()
        .then((data) => {
        res.send(data.maxMinOfAverages);
    })
        .catch((error) => {
        console.log(error);
    });
});
router.get('/maxMin/averages/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode)
        .then((data) => {
        res.send(data.maxMinOfAverages);
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.default = router;
