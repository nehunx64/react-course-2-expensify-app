import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const expenseDatabase = database.ref('expenses');

  export { firebase, database, expenseDatabase as default };

//   // child removed
//   expenseSlice.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   // child changed
//   expenseSlice.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   // child added
//   expenseSlice.on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   expenseSlice.on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

//   expenseSlice.once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

//   expenseSlice.push({
//     description: 'plastic bags',
//     note: '',
//     amount: 280,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
//  });

//  expenseSlice.push({
//     description: 'rent',
//     note: '',
//     amount: 195000,
//     createdAt: moment(0).add(4, 'days').valueOf()
// });

// expenseSlice.push({
//     description: 'Car spare parts',
//     note: '',
//     amount: 102000,
//     createdAt: moment(0).add(3, 'months').valueOf()
// });


//   database.ref('notes/-L0V3xcjNQB7YJKOhWsZ').update({
//       body: 'Buy food'
//   });

//   database.ref('notes').push({
//       title: 'Courses to teach',
//       body: 'Python, React Native, NodeJS...'
//   });


//   database.ref('notes').set(notes);

//   const onValueChange = database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//   })

//   database.ref('location').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) =>{
//         console.log('Error fetching data', e);
//     });

// const onValueChange =  database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//   database.ref().set({
//       name: 'Akahomen Itua',
//       age: 24,
//       stressLevel: 6,
//       job: {
//           title: 'Senior Software Developer',
//           company: 'Rothadam'
//       },
//       location: {
//           city: 'Sango-tedo',
//           state: 'Lagos',
//           country: 'Nigeria'
//       }
//   }).then(() => {
//       console.log('Data was saved');
//   }).catch((e) => {
//       console.log('This failed. ', e);
//   });

  //database.ref().set('This is my data');

//   database.ref('age').set(31);  
//   database.ref('location/city').set('Ikeja');

//   database.ref('attributes').set({
//       height: 1.78,
//       weight: 83
//   }).then(() => {
//       console.log('Attibutes were saved o!');
//   }).catch((err) => {
//       console.log('This call failed. ', err);
//   });

// database.ref('isSingle').remove()
//   .then(() => {
//       console.log('isSingle entry was removed!');
//   })
//   .catch((err) => {
//       console.log('An error occured:', err);
//   });

//database.ref('isSingle').set(null);

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Ikeja',
//     'job/company': 'Maxfront'
// });