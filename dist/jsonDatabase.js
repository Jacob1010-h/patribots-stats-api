"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllData = void 0;
const database_1 = require("firebase/database");
require("firebase/database");
const firebaseConfig_ts_1 = __importDefault(require("./firebaseConfig.ts"));
//Frank's Middle
function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbRef = (0, database_1.ref)(firebaseConfig_ts_1.default);
            const snapshot = yield (0, database_1.get)(dbRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const jsonString = JSON.stringify(data);
                // console.log(jsonString);
                return jsonString;
            }
            else {
                console.log('No data available');
            }
        }
        catch (error) {
            console.error('Error fetching data: ', error);
        }
    });
}
exports.getAllData = getAllData;
