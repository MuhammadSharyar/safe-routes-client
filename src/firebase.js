import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0nr3quNKOVa1pNP0rqcvRdJAbzphDMnQ",
  authDomain: "saferoutes-1f420.firebaseapp.com",
  projectId: "saferoutes-1f420",
  storageBucket: "saferoutes-1f420.appspot.com",
  messagingSenderId: "6528901331",
  appId: "1:6528901331:web:89e76f7f45a3a9c1017426",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
