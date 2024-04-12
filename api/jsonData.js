import { ref, get } from 'firebase/database';
import 'firebase/database';
import db from './config.js';

//Frank's Middle
export async function getAllData() {
    try {
        const dbRef = ref(db);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const jsonString = JSON.stringify(data);
            // console.log(jsonString);
            return jsonString;
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}