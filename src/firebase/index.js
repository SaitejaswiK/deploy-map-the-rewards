import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDptY8u9pH9oWlFgCgo5jej1oEX-aK-_rc",
    authDomain: "getmiles-challenge-242df.firebaseapp.com",
    databaseURL: "https://getmiles-challenge-242df.firebaseio.com",
    projectId: "getmiles-challenge-242df",
    storageBucket: "getmiles-challenge-242df.appspot.com",
    messagingSenderId: "812438241735",
    appId: "1:812438241735:web:1f65cd358bccc2851199e2"
  };

  firebase.initializeApp(config);
  
  export default firebase;