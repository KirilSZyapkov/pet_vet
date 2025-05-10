// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOct-cBPjpK662m5azDLz2Pmj4DmuwH-o",
  authDomain: "pet-vet-6a785.firebaseapp.com",
  projectId: "pet-vet-6a785",
  storageBucket: "pet-vet-6a785.firebasestorage.app",
  messagingSenderId: "841931910003",
  appId: "1:841931910003:web:c48506fa4d74750779b306"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };