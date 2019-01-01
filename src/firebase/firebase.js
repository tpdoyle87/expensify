import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCEHg-TPsmFMCYS9Acfgpd8IGRxCR_TjjY",
  authDomain: "expensify-c68da.firebaseapp.com",
  databaseURL: "https://expensify-c68da.firebaseio.com",
  projectId: "expensify-c68da",
  storageBucket: "expensify-c68da.appspot.com",
  messagingSenderId: "487281435737"
};
firebase.initializeApp(config);
const database = firebase.database()
