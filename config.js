import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDapEhK4BqtsVxl3jmDLN-pi3wSZUldfio",
    authDomain: "voting-50c1f.firebaseapp.com",
    databaseURL: "https://voting-50c1f-default-rtdb.firebaseio.com",
    projectId: "voting-50c1f",
    storageBucket: "voting-50c1f.appspot.com",
    messagingSenderId: "96234258846",
    appId: "1:96234258846:web:a63fde583c3944f876568f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();