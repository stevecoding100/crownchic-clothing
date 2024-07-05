import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import { setCurrentUser } from "./store/user/user.action";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
const App = () => {
    const dispatch = useDispatch();

    // Effect to listen for authentication state changes
    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                // If there is a user, create or update their document in the database
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        // Cleanup the subscription when the components unmounts
        return unsubscribe;
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
