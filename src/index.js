import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import firebase from 'firebase';


// firebase.initializeApp({
//       apiKey: "AIzaSyA2junqwJNf7EV4x_g8cVySpctsyppiit8",
//       authDomain: "mi-fabuloso-burger.firebaseapp.com",
//       databaseURL: "https://mi-fabuloso-burger.firebaseio.com",
//       projectId: "mi-fabuloso-burger",
//       storageBucket: "mi-fabuloso-burger.appspot.com",
//       messagingSenderId: "1022205186885"
//     });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
