import firebase from "firebase/compat";

const config = {
    apiKey: "AIzaSyALyw73IwrX4SNJzZEIzekQfqBpGMYJu-4",
    authDomain: "expensify-6e5e1.firebaseapp.com",
    databaseURL: "https://expensify-6e5e1-default-rtdb.firebaseio.com",
    projectId: "expensify-6e5e1",
    storageBucket: "expensify-6e5e1.appspot.com",
    messagingSenderId: "92509795295",
    appId: "1:92509795295:web:8f313dce02972711bb0a6a"
};

// Initialize Firebase
firebase.initializeApp(config);
const database = firebase.database()

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];
//
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
// });

// database.ref().set({
//     name: 'Byron Buyck',
//     isSingle: false,
//     age: 35,
//     location: {
//         city: 'Atlanta',
//         state: 'Georgia'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('Failed operation', e);
// });
//
// database.ref('attributes').set({
//     height: 57,
//     weight: 140
// }).then(()=> {
//     console.log('Data Saved Again')
// }).catch((e) =>{
//     console.log('Failed Shit!', e);
// });
//
// database.ref('expenses').remove();

//child_changed
database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
})

//child_added
database.ref('expenses').on('child_added', (snapshot)=>{
    console.log(snapshot.key, snapshot.val());
})

database.ref('expenses').push({
    description: 'Renttere',
    note: '',
    amount: 145300,
    createdAt: 976123498763
});
