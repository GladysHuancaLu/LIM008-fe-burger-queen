import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA2junqwJNf7EV4x_g8cVySpctsyppiit8",
  authDomain: "mi-fabuloso-burger.firebaseapp.com",
  databaseURL: "https://mi-fabuloso-burger.firebaseio.com",
  projectId: "mi-fabuloso-burger",
  storageBucket: "mi-fabuloso-burger.appspot.com",
  messagingSenderId: "1022205186885",
  appId: "1:1022205186885:web:e368a8c18eeb10a1"
};

firebase.initializeApp(config);
  
export default firebase;