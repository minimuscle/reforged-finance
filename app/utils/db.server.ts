import 'dotenv/config'
import { getAuth } from 'firebase-admin/auth'
import { cert, getApp, getApps, initializeApp} from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { Currency, type User } from './types'

if (!getApps().length) {
    initializeApp({
        credential: cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS!)),
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.australia-southeast1.firebasedatabase.app`
    })
}
const auth = getAuth(getApp())
export const db = getFirestore(getApp())

export async function getSessionToken(idToken: string) {
  const decodedToken = await auth.verifyIdToken(idToken);
  if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
    throw new Error("Recent sign in required");
  }
  const twoWeeks = 60 * 60 * 24 * 14 * 1000;
  return auth.createSessionCookie(idToken, { expiresIn: twoWeeks });
}

export async function createNewUser(uid: string, email: string) {
  const user: User = {
    name: '',
    email: email,
    country: '',
    currency: Currency.AUD,
    netIncome: 0,
    salaryFrequency: '',
    cashGoal: 0,
    emergencyFundGoal: 0,
    savingForHomeDeposit: false,
    homeDepositGoal: 0,
    super: {},
    cash: {},
    debts: {},
    sideIncome: {},
  };
  db.collection("users").doc(uid).set(user);
}

export async function verifySessionCookie(sessionCookie: string) {
  return auth.verifySessionCookie(sessionCookie, true);
}