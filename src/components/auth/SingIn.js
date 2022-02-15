import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import LogOut from './LogOut';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
 


function SingIn() {
   

    const user = useSelector((state) => state.auth.value);

    let LogOrSignUp = user !== null ?   <Login/> : <Register/>
  return (
    <>{!user ? <Login/>  :  <LogOut/>}
    
    
    </>
    
  )
}

export default SingIn