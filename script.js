import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const appDiv = document.getElementById('app');

onAuthStateChanged(auth, user => {
  if (user) {
    appDiv.innerHTML = `
      <h2>Welcome, ${user.email}</h2>
      <button id="logout">Logout</button>
      <p>Flight input area will be here...</p>
    `;
    document.getElementById('logout').onclick = () => signOut(auth);
  } else {
    appDiv.innerHTML = '<p>Please sign in</p>';
  }
});