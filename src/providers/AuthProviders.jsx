import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const user = { displayName: "Suyel" };

  const register = (email,password)=>{
   return  createUserWithEmailAndPassword(auth,email,password)
  }


  const authInfo = {
    user,register
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
