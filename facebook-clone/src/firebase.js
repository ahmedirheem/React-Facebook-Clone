import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/GoogleAuthProvider';


const firebaseConfig = {
    apiKey: "AIzaSyBhJXFI_dktJfZ1dnZb3oP5eHoactVOSnA",
    authDomain: "facebook-clone-20f34.firebaseapp.com",
    projectId: "facebook-clone-20f34",
    storageBucket: "facebook-clone-20f34.appspot.com",
    messagingSenderId: "645631269225",
    appId: "1:645631269225:web:9b03aac58ca600370145f8",
    measurementId: "G-4FV5WXB2HZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};

export default db
// export default firebase