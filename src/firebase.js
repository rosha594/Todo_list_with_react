import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABp0_klIY8_tnaSuSPQ-82cGgfYBq-nmo",
  authDomain: "dailytodolist-e4d93.firebaseapp.com",
  projectId: "dailytodolist-e4d93",
  storageBucket: "dailytodolist-e4d93.appspot.com",
  messagingSenderId: "510332378904",
  appId: "1:510332378904:web:5315345e8962732469486d",
  measurementId: "G-RDS6MZP624",
});

const db = firebaseApp.firestore();

export default db;
