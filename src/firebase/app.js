import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9loTXCEkmgKDsqjPEGQkhWBWSDBZzVIE",
  authDomain: "portfolio-d7a5d.firebaseapp.com",
  databaseURL: "https://portfolio-d7a5d.firebaseio.com",
  projectId: "portfolio-d7a5d",
  storageBucket: "portfolio-d7a5d.appspot.com",
  messagingSenderId: "986749327949",
  appId: "1:986749327949:web:2e3547262c31b2e2",
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const App = FirebaseApp;
