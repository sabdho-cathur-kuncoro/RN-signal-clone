import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOl20L-gjmZruM8T6BM1QCo6OvG8EFeJc",
    authDomain: "signal-clone-cb06f.firebaseapp.com",
    projectId: "signal-clone-cb06f",
    storageBucket: "signal-clone-cb06f.appspot.com",
    messagingSenderId: "1071789969547",
    appId: "1:1071789969547:web:956317f7b180ddc1b6c48e",
    measurementId: "G-DW1GCRYHYR"
  };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDE9xSCX4GOFdDhjVm0GuyAjL61dOgP104",
  //   authDomain: "projectpertama-ba892.firebaseapp.com",
  //   projectId: "projectpertama-ba892",
  //   storageBucket: "projectpertama-ba892.appspot.com",
  //   messagingSenderId: "699761809702",
  //   appId: "1:699761809702:web:c8b9bb10d0e04f616909e7",
  //   measurementId: "G-F2EM15VVQY"
  // };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };