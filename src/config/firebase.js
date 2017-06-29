
import * as firebase from 'firebase';

// should go in a secret file
const config = {
   apiKey: "AIzaSyCiOTxuvllSdozuPDUvtZ1PTbBrB1Fio6M",
    authDomain: "tyslin-77cc4.firebaseapp.com",
    databaseURL: "https://tyslin-77cc4.firebaseio.com",
    projectId: "tyslin-77cc4",
    storageBucket: "tyslin-77cc4.appspot.com",
    messagingSenderId: "111522455158"
};
firebase.initializeApp(config);

export default firebase;
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth