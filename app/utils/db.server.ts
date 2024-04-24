import 'dotenv/config'
import { getAuth } from 'firebase-admin/auth'
import { applicationDefault, getApp, getApps, initializeApp} from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps().length) {
    initializeApp({
        credential: applicationDefault(),
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

export async function verifySessionCookie(sessionCookie: string) {
  return auth.verifySessionCookie(sessionCookie, true);
}