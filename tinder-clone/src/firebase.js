import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZZZcVvZYJk8VL9H6SNOVgKSmqDTWFrQI",
    authDomain: "tinder-clone-30175.firebaseapp.com",
    databaseURL: "https://tinder-clone-30175.firebaseio.com",
    projectId: "tinder-clone-30175",
    storageBucket: "tinder-clone-30175.appspot.com",
    messagingSenderId: "520250965794",
    appId: "1:520250965794:web:72a443fa545ff6eba3af7b",
    measurementId: "G-DQ81TF7CB4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;