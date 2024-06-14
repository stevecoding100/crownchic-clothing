import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// Create a Context for the user
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

// Create a provider component
export const UserProvider = ({ children }) => {
    // State to hold the current user
    const [currentUser, setCurrentUser] = useState(null);

    // Value to be provided to consuming components
    const value = { currentUser, setCurrentUser };

    // Effect to listen for authentication state changes
    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                // If there is a user, create or update their document in the database
                createUserDocumentFromAuth(user);
            }

            // Set the current user in state
            setCurrentUser(user);
        });
        // Cleanup the subscription when the components unmounts
        return unsubscribe;
    }, []);

    // Provide the current user context to children components
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
