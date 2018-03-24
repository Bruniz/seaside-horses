import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4-sz6n45Z66ZDLdi2FLGpGzO2eE-sBWc",
    authDomain: "seaside-horses.firebaseapp.com",
    databaseURL: "https://seaside-horses.firebaseio.com",
    projectId: "seaside-horses",
    storageBucket: "seaside-horses.appspot.com",
    messagingSenderId: "698696117777"
};
var fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;