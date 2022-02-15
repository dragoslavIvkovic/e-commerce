import React from 'react'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../configs/firebaseConfig";

function LogOut() {
    initializeApp(firebaseConfig);
  const auth = getAuth();
  return (
    <div><button onClick={() => {
        signOut(auth).then(() => {
            console.log("user is signed out")
        }).catch((error) => console.log(error))
    }}>Log out</button></div>
  )
}

export default LogOut