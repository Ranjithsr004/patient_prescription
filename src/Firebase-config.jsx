// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf6NN_LHhQTPTD4lecgtD7TP6dlMTz5mc",
  authDomain: "ehrsafe-a68ba.firebaseapp.com",
  projectId: "ehrsafe-a68ba",
  storageBucket: "ehrsafe-a68ba.appspot.com",
  messagingSenderId: "607755397619",
  appId: "1:607755397619:web:bc3337534f53617c490a86",
  measurementId: "G-N6LN82SRMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default db;