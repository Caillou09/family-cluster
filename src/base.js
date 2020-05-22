import firebase from 'firebase/app';
require('firebase/database') ;
require ('firebase/auth');

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrO1DnXQ34RoRSK2_C_Re6PDTJV7Zs0Do",
  authDomain: "family-cluster.firebaseapp.com",
  databaseURL: "https://family-cluster.firebaseio.com",
  projectId: "family-cluster",
  storageBucket: "family-cluster.appspot.com",
  messagingSenderId: "240206447048",
  appId: "1:240206447048:web:96bfba41cdfd34118380fd",
  measurementId: "G-06E9FC6TGT"
})


export default firebaseApp;
