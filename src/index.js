import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCvcEfWBtQI2-Kqtav1vgSZ_DaHfpbp3Gs",
    authDomain: "sharencare-a9b3e.firebaseapp.com",
    databaseURL: "https://sharencare-a9b3e.firebaseio.com",
    projectId: "sharencare-a9b3e",
    storageBucket: "sharencare-a9b3e.appspot.com",
    messagingSenderId: "342027257585"
};
firebase.initializeApp(config);

ReactDOM.render(<App firebase={firebase}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
