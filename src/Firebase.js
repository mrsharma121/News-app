import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAps6RDbDBh9wyeLbvXG5bmsraJAxjrFeI",
    authDomain: "form-submission-191ac.firebaseapp.com",
    projectId: "form-submission-191ac",
    storageBucket: "form-submission-191ac.appspot.com",
    messagingSenderId: "231353358692",
    appId: "1:231353358692:web:0c4782c6d54742c67a4271"
  };
  // Initialize Firebase
  var Firsebase = firebase.initializeApp(firebaseConfig);

  var database = firebase.firestore()

  export default database