import { createContext, useEffect, useReducer } from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// Create a Context for the user
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};
const INITIAL_STATE = {
    currentUser: null,
};
const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

// Create a provider component
export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user,
        });
    };

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

    // Value to be provided to consuming components
    const value = { currentUser, setCurrentUser };

    // Provide the current user context to children components
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
