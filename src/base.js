import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrO1DnXQ34RoRSK2_C_Re6PDTJV7Zs0Do",
  authDomain: "family-cluster.firebaseapp.com",
  databaseURL: "https://family-cluster.firebaseio.com",
})

export default firebaseApp;
