import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyApNDJWSjDDzGIGIKWah2xomN5cxl1GV38",
  authDomain: "todo-react-app-c83fb.firebaseapp.com",
  projectId: "todo-react-app-c83fb",
  storageBucket: "todo-react-app-c83fb.appspot.com",
  messagingSenderId: "259609301581",
  appId: "1:259609301581:web:d117d0a8b179774f180204"
});

const db = firebaseApp.firestore();

export default db;  