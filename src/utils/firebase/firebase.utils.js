// Import necessary functions from firebase SDKs
import { initializeApp } from "firebase/app";
import {
    getAuth, // for authentication services
    // signInWithRedirect,
    signInWithPopup, // for signing in with a popup window
    GoogleAuthProvider, // to enable google as an auth provider
    createUserWithEmailAndPassword, // to create users with email/password
    signInWithEmailAndPassword, // to sign in users with email/password
    signOut, // to sign out users
    onAuthStateChanged, // to listen for auth state changes
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

// Firebase configuration for the web app
const firebaseConfig = {
    apiKey: "AIzaSyDx8LKJMtjlWd7Sl_qiGhzxetYbeVm1kDY",
    authDomain: "crownchic-db.firebaseapp.com",
    projectId: "crownchic-db",
    storageBucket: "crownchic-db.appspot.com",
    messagingSenderId: "146288344699",
    appId: "1:146288344699:web:ffb7c1afb7af7495666cde",
};

// Initialize Firebase app with the above configuration
const firebaseApp = initializeApp(firebaseConfig);

// Initialize a Google Auth provider instance
const googleProvider = new GoogleAuthProvider();

// Set custom parameters for Google Auth provider
googleProvider.setCustomParameters({
    prompt: "select_account", // Always prompt user to select an account
});

// Get the auth instance from firebase
export const auth = getAuth();

// Function to sign in with Google using a popup window
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () =>
//     signInWithRedirect(auth, googleProvider);

// Get the Firestore instance from firebase
export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
    console.log("Done!");
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap;
};

// Function to create a user document in Firestore from authentication info
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return; // If there's no userAuth, exit the function

    // Get a reference to the user document in Firestore
    const userDocRef = doc(db, "users", userAuth.uid);

    // Get a snapshot of the user document
    const userSnapshot = await getDoc(userDocRef);

    // If user data does not exist in Firestore
    if (!userSnapshot.exists()) {
        // Extract displayName and email from userAuth object
        const { displayName, email } = userAuth;
        const createdAt = new Date(); // Get the current date
        try {
            // Set the user document with the provided data
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("Errro creating the user", error.message);
        }
    }
    // If user data exists, return the user document reference
    return userDocRef;
};

// Function to create a user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return; // If email or password is missing, exit
    return await createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in a user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return; // If email or password is missing, exit
    return await signInWithEmailAndPassword(auth, email, password);
};
// Function to sign out the current user
export const signOutUser = async () => await signOut(auth);

// Function to set up a listener for authentication state changes
export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
