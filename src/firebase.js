import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDu6BkKZ7NddQCdAQ9bKUqqLkNHbKqOzCc",
    authDomain: "lurbchat.firebaseapp.com",
    databaseURL: "https://lurbchat.firebaseio.com",
    projectId: "lurbchat",
    storageBucket: "lurbchat.appspot.com",
    messagingSenderId: "819513803661",
    appId: "1:819513803661:web:d9fa9602c3bfed354373c4",
    measurementId: "G-EJRZS28L5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;