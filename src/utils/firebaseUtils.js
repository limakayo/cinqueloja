import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyDtXvZXmYP6n_lgz1T1-n04MObcbaQADmI",
  authDomain: "cinque-loja.firebaseapp.com",
  databaseURL: "https://cinque-loja.firebaseio.com",
  projectId: "cinque-loja",
  storageBucket: "cinque-loja.appspot.com",
  messagingSenderId: "174533352464"
};

export default firebase.initializeApp(config);
