import firebase from 'firebase/app';
import 'firebase/database';


const initFirebase = async () => {

  // This check prevents us from initializing more than one app.
  if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyC4twP2v_2C_xg6cOWKny12RedNlQAWPMc",
        authDomain: "myblog-b7518.firebaseapp.com",
        databaseURL: "https://myblog-b7518-default-rtdb.firebaseio.com",
        projectId: "myblog-b7518",
        storageBucket: "myblog-b7518.appspot.com",
        messagingSenderId: "292513388362",
        appId: "1:292513388362:web:19391a780a0ed598a713b3",
        measurementId: "G-1GSWR5415L"
    });
  }
};


// Gets all posts from the database in reverse chronological order.

export const getPosts = async () => {
  // Because our exported functions can be called at any time from
  // any place in our app, we need to make sure we've initialized
  // a Firebase app every time these functions are invoked.
  initFirebase();
  const posts = await firebase
    .database()
    .ref('/posts')
    .orderByChild('dateCreated')
    .once('value')
    .then((snapshot) => {
      const snapshotVal = snapshot.val();
      const result = [];
      for (var slug in snapshotVal) {
        const post = snapshotVal[slug];
        result.push(post);
      }
      return result.reverse();
    });
  return posts;
};