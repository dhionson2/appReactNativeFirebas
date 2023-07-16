// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN7AYcsslkcmIaLywMBFBQOB6M34kLHn4",
  authDomain: "meuapp-b7098.firebaseapp.com",
  projectId: "meuapp-b7098",
  storageBucket: "meuapp-b7098.appspot.com",
  messagingSenderId: "229188772618",
  appId: "1:229188772618:web:d57674cb8be3ae35e790f3",
  measurementId: "G-DYZK3EKSH3"
};

if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
}
export default firebase;