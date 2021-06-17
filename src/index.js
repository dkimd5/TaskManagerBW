import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import firebase from "firebase";

let firebaseConfig = {
   apiKey: "AIzaSyBuZc1sqAqAQt2eCDOSAymR38KngE2zDs4",
   authDomain: "taskmanagerbw.firebaseapp.com",
   projectId: "taskmanagerbw",
   storageBucket: "taskmanagerbw.appspot.com",
   messagingSenderId: "35471273360",
   appId: "1:35471273360:web:ac6c85a8ef43e6a76e9715",
   measurementId: "G-TLQ5G5VRZT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(<App />, document.getElementById("app"));