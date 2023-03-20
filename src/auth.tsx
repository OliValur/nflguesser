import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config object goes here
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;