import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx8LKJMtjlWd7Sl_qiGhzxetYbeVm1kDY",
    authDomain: "crownchic-db.firebaseapp.com",
    projectId: "crownchic-db",
    storageBucket: "crownchic-db.appspot.com",
    messagingSenderId: "146288344699",
    appId: "1:146288344699:web:ffb7c1afb7af7495666cde",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // if user data does not exist
    if (!userSnapshot.exists()) {
        // create / set the document with the data from userAuth in my collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("Errro creating the user", error.message);
        }
    }
    // if user data exists
    return userDocRef;
};
