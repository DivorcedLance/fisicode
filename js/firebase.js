//Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBms_OpwiYnfpR9pRYSyP8hLuBKSBGKiVU',
  authDomain: 'fisicode-bcfef.firebaseapp.com',
  projectId: 'fisicode-bcfef',
  storageBucket: 'fisicode-bcfef.appspot.com',
  messagingSenderId: '266150074355',
  appId: '1:266150074355:web:7c072ddc671d727d6aa486',
  measurementId: 'G-7WS1C4VQPV',
};
// TO ANYONE READING THE CODE:
// This is a early version of the webpage. I'm aware of the security risks of having the API key in the code. Soon I'll be using a backend (Python Flask or Django) to handle the requests. This also will be use to fix the obvious vulnerability of the index-authorized page.
// -Vergara Pachas Jose Luis

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
