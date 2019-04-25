import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDLI3fVYffd9cCX0meNM0Vh-wRgGPprPFc",
    authDomain: "expenses-8e4f8.firebaseapp.com",
    databaseURL: "https://expenses-8e4f8.firebaseio.com",
    projectId: "expenses-8e4f8",
    storageBucket: "expenses-8e4f8.appspot.com",
    messagingSenderId: "124888320750"
  };
  
  firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};
