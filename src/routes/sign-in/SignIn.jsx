import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
    // auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
    // useEffect(() => {
    //     const fetchRedirectResult = async () => {
    //         const response = await getRedirectResult(auth);

    //         if (response) {
    //             console.log(response);
    //             const userDocRef = await createUserDocumentFromAuth(
    //                 response.user
    //             );
    //         }
    //     };

    //     fetchRedirectResult();
    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
