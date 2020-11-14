import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyArBMNgGyy4x_zGpoAp3r6_ZixqM7-0K_c",
    authDomain: "chatappreactjs.firebaseapp.com",
    databaseURL: "https://chatappreactjs.firebaseio.com",
    projectId: "chatappreactjs",
    storageBucket: "chatappreactjs.appspot.com",
    messagingSenderId: "969417292138",
    appId: "1:969417292138:web:ba369031a623ab3ad0cd13",
    measurementId: "G-YFF4V7NLLT"
  };

 
  
firebase.initializeApp(firebaseConfig);
export default firebase
