import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyANJp3fEkhj76tYeQEjwLBL3V9XP9o7NxE",
  authDomain: "keep-clone-ad66b.firebaseapp.com",
  databaseURL: "https://keep-clone-ad66b.firebaseio.com",
  projectId: "keep-clone-ad66b",
  storageBucket: "keep-clone-ad66b.appspot.com",
  messagingSenderId: "63033014408"
};

firebase.initializeApp(config);

let databaseRef = null;
let currentUser = null;

export const getCurrentUser = new Promise((resolve) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = user;
      databaseRef = firebase.database().ref(user.uid);
      resolve(user);
    } else {
      currentUser = null;
      databaseRef = null;
    }
  });
});

export { currentUser, databaseRef };
