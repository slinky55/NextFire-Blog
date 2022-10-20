import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCQGUyrA11PoH7eaFyX8s5tjnLY5IWCV4Q",
    authDomain: "nextfire-blog-5be8e.firebaseapp.com",
    projectId: "nextfire-blog-5be8e",
    storageBucket: "nextfire-blog-5be8e.appspot.com",
    messagingSenderId: "143505114342",
    appId: "1:143505114342:web:802c2891541bdf762aa727"
};

// if (!firebase.getApps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider;
export const firestore = getFirestore(app);
export const storage = getStorage(app);