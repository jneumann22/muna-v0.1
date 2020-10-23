import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCmKIzgLSaiNKNowXXeKYm3F8dRfQJzviY",
    authDomain: "muna-v-0.firebaseapp.com",
    databaseURL: "https://muna-v-0.firebaseio.com",
    projectId: "muna-v-0",
    storageBucket: "muna-v-0.appspot.com",
    messagingSenderId: "577606279800",
    appId: "1:577606279800:web:916590e08c0a34f076038d",
    measurementId: "G-45NJLBV1VF"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;