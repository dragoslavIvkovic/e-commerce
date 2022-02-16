import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import LogOut from './LogOut';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
 
import { getAuth } from "firebase/auth";

function SingIn() {
   
const auth = getAuth();
    const user = useSelector((state) => state.auth.value);
    
   
   console.log(auth.currentUser)

  
  return (
    <>{user ? <LogOut/> : <Login/>}
    
    
    </>
    
  )
}

export default SingIn