// this is a bunch of firebase scenarios with out the connection data

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//       expenses.push({
//         id: child.key,
//         ...child.val()
//       })
//     })
//     console.log(expenses)
//   })

database.ref('expenses').push({
  description: "gas",
  note: "January gas bill",
  amount: 9500,
  createdAt: 3455678543
})


// database.ref('notes/-LV9lb8lV6yKH8-j0XuR').remove();
// database.ref('notes').push({
//   title: "course topics",
//   body: "react native"
// })

// database.ref().set({
//   name: "Thomas Doyle-Engler",
//   age: 31,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google"
//   },
//   location: {
//     city: 'Rutherfordton',
//     country: "United States of America",
//   }
// }).then(() => {
//   console.log("saved to database")
// }).catch((e) => {
//   console.log('error: ', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// })

// database.ref().update({
//   job: "Manager",
//   "location/city": "Boston",
//   "location/state": "Massachuttes"

// })
// database.ref('isSingle').set()

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data removed')
//   })
//   .catch((e) => {
//     console.log('error: ', e)
//   })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error: ', e)
//   })

// const onValChange = database.ref()
//   .on('value', (snapshot) => {
//     const data = snapshot.val()
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
//   }, (e) => {
//     console.log("Error with data fetching", e)
//   })

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValChange)
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(28)
// }, 10500);

