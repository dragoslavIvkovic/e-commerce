import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../configs/firebaseConfig";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../redux/authSlice";
import ProtectedRoute from "../utils/ProtectedRoute";

function Header() {
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);
  return (
    <div className='header'>
    <ul>  
    <li><Link to="/cart" className="cart">CART</Link></li>
    <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/singin">Singin</Link>
          </li>
           
          <li>
            <Link to="/protected">Protected page</Link>
          </li>
           
        </ul>
    
    
    
    </div>
  )
}

export default Header