var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ref, get } from 'firebase/database';
import 'firebase/database';
import db from './firebaseConfig.js';
//Frank's Middle
export function getAllData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbRef = ref(db);
            const snapshot = yield get(dbRef);
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
