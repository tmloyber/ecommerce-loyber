 import firebase from 'firebase/app';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBxDhdpn7GlumFymIWQBZey6-inyMfBvSI",
    authDomain: "wander-ecommerce.firebaseapp.com",
    projectId: "wander-ecommerce",
    storageBucket: "wander-ecommerce.appspot.com",
    messagingSenderId: "983109825315",
    appId: "1:983109825315:web:1060be5be011a446725296"
  };

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const database = fb.firestore();