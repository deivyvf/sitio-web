const firebaseConfig = {
    apiKey: "AIzaSyDWp8YOb1Xi1YP74A1ToVNcWqQ3ci8cGRo",
    authDomain: "comida-rapida-acaca.firebaseapp.com",
    projectId: "comida-rapida-acaca",
    storageBucket: "comida-rapida-acaca.appspot.com",
    messagingSenderId: "171459979983",
    appId: "1:171459979983:web:008158b5d54be086db65ba"
};
  
// Inicialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();