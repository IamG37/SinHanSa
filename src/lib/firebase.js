// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmUmIV1VPwO6ES8HYRVilL0y7Oe51a93k",
    authDomain: "prohost-9406a.firebaseapp.com",
    projectId: "prohost-9406a",
    storageBucket: "prohost-9406a.appspot.com",
    messagingSenderId: "976489526771",
    appId: "1:976489526771:web:5cd8ead6af96db8f110e86"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firebase 서비스 가져오기
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
