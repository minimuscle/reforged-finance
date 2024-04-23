import { initializeApp, getApps } from 'firebase/app';
import 'dotenv/config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { applicationDefault, getApps as getAdminApps, initializeApp as initializeAdminApp } from 'firebase-admin/app';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

if (!getApps().length) {
    initializeApp(firebaseConfig)
}

if (!getAdminApps().length) {
    initializeAdminApp({
        credential: applicationDefault(),
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    })
}

const auth = getAuth()
const adminAuth = getAdminAuth()
export const db = getFirestore()

export async function signUp(email: string, password: string) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  return user
}

export async function getSessionToken(idToken: string) {
  console.log('getSessionToken')
  const decodedToken = await adminAuth.verifyIdToken(idToken);
  if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
    throw new Error("Recent sign in required");
  }
  const twoWeeks = 60 * 60 * 24 * 14 * 1000;
  return adminAuth.createSessionCookie(idToken, { expiresIn: twoWeeks });
}

// let adminFirebase: any

// if (!adminFirebase?.apps.length) {
//     adminFirebase = initializeAdminApp({
//         credential: applicationDefault(),
//         databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
//     });
// }

// export async function signUp(email: string, password: string) {

// }