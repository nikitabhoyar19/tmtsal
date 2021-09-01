import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDFEAXBk0pU1M7WhBcz9GKxX7KIw4KuVu0",
    authDomain: "tmtsal.firebaseapp.com",
    projectId: "tmtsal",
    storageBucket: "tmtsal.appspot.com",
    messagingSenderId: "557252064379",
    appId: "1:557252064379:web:294374c3cb96cb07fb9ede",
    measurementId: "G-CXGK8H0JBR"
  };

  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export default firebase;