import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider()

const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

const githubLogin =()=>{
  return signInWithPopup(auth,githubProvider)
}


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");

  /* --------------- */

  const register = (email, password, photoURL, name) => {
    setLoading(true);
    console.log(email, password, photoURL, name);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ------------------ */
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("Logged", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    register,
    login,
    photo,
    logOut,
    loading,
    googleLogin,githubLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
