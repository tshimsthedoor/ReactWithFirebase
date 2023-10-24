/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import {auth} from "../firebase";

// create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // signin with google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle
  };

  // set current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
       setCurrentUser(user); 
    });
    return unsubscribe;
  }, []);


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
