import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOvwcmTy4DmI5imedpj36qtjLrdNcyOJc",
    authDomain: "instagram-clone-react-2c3eb.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-2c3eb.firebaseio.com",
    projectId: "instagram-clone-react-2c3eb",
    storageBucket: "instagram-clone-react-2c3eb.appspot.com",
    messagingSenderId: "186628573416",
    appId: "1:186628573416:web:84897d4f247d6c996da15d",
    measurementId: "G-208R1C15GF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
  //export default db;