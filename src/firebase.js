import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBW9aZD57mNK2dZIlX9F72IbBNpLYSs9bU",
    authDomain: "clone-546c9.firebaseapp.com",
    projectId: "clone-546c9",
    storageBucket: "clone-546c9.appspot.com",
    messagingSenderId: "496106535266",
    appId: "1:496106535266:web:184329486b1de94464943b",
    measurementId: "G-6MQ8B8JE6H"
});


const auth = firebase.auth();

export { auth };

