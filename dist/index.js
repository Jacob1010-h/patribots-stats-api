"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const landing_ts_1 = __importDefault(require("./routes/landing.ts"));
const dataRouter_ts_1 = __importDefault(require("./routes/dataRouter.ts"));
const teams_ts_1 = __importDefault(require("./routes/teams.ts"));
require("dotenv/config.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', landing_ts_1.default);
app.use('/data', dataRouter_ts_1.default);
app.use('/teams', teams_ts_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server Listening on PORT:', PORT);
});
exports.default = app;
