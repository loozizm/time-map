import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp = ({
    apiKey: "AIzaSyCNOnmip9c9F5cEwjzsPhlNKvjXLwXX4W8",
    authDomain: "time-map-7b4ce.firebaseapp.com",
    databaseURL: "https://time-map-7b4ce.firebaseio.com",
    projectId: "time-map-7b4ce",
    storageBucket: "time-map-7b4ce.appspot.com",
    messagingSenderId: "533631883611",
    appId: "1:533631883611:web:0d40e5b53d149ba97b227e",
    measurementId: "G-2MHQZXS2R8"
  });
}

export default firebase