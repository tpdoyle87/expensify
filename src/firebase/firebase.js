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
database.ref().set({
  name: "Thomas Doyle-Engler",
  age: 31,
  isSingle: false,
  location: {
    city: 'Rutherfordton',
    country: "United States of America",
    state: "North Carolina"
  }
}).then(() => {
  console.log("saved to database")
}).catch((e) => {
  console.log('error: ', e)
})


// database.ref().set('This is my data')
// database.ref("age").set(32)
// database.ref('location/city').set("Asheville")
database.ref('attributes').set({
  height: 68,
  weight: 178
}).then(() => {
  console.log('attributes updated')
}).catch((e) => {
  console.log('another error: ', e)
})
