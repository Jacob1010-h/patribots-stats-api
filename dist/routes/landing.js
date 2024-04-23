"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_js_1 = require("../database.js");
var router = express_1.default.Router();
const noRoute = 'Here are the available routes: \n' +
    '/data \n' +
    '/teams \n' +
    '/landing \n';
router.get('/', function (req, res, next) {
    const response = noRoute;
    res.send(response);
});
router.get('/full', (req, res) => {
    (0, database_js_1.fetchDataAndProcessAll)().then((data) => {
        res.send(data.fullData);
    });
});
router.get('/full/:eventCode', (req, res) => {
    (0, database_js_1.fetchDataAndProcess)(req.params.eventCode).then((data) => {
        res.send(data.fullData);
    });
});
exports.default = router;
