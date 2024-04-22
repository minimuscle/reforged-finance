import { initializeApp, getApps } from 'firebase-admin/app';
import 'dotenv/config'
import { getAuth } from 'firebase-admin/auth';
import { getDatabase } from 'firebase-admin/database';
import { getFirestore } from 'firebase-admin/firestore';

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

if (!getApps().length) {
    initializeApp()
}
const auth = getAuth()
const db = getFirestore()

export async function signUp() {
    return auth.createUser({
        email: 'joshthiele@live.com.au',
        emailVerified: true,
        password: 'bloo92',
    })
}

export { db }

// let adminFirebase: any

// if (!adminFirebase?.apps.length) {
//     adminFirebase = initializeAdminApp({
//         credential: applicationDefault(),
//         databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
//     });
// }

// export async function signUp(email: string, password: string) {

// }