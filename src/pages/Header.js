import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../_styles/Header.css'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../configs/firebaseConfig'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { saveUser } from '../redux/authSlice'
import ProtectedRoute from '../utils/ProtectedRoute'
import { FaShoppingCart } from 'react-icons/fa'
import {
  BsFillPersonCheckFill,
  BsFillPersonDashFill,
  BsHeartFill
} from 'react-icons/bs'

function Header () {
  initializeApp(firebaseConfig)
  const auth = getAuth()
  const user = useSelector(state => state.auth.value)
  console.log('user from state', user)
  const dispatch = useDispatch()

  const { quantity } = useSelector(state => state.cart)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(saveUser(user.refreshToken))
      } else {
        dispatch(saveUser(undefined))
      }
    })
  }, [auth, dispatch])
  return (
    <div className='header'>
      <ul className="header__container">
        <Link to='/' className='header__logo'>
          Home
        </Link>
<div className='header__right'>
        <Link to='/protected' className='header__links'>
          <BsHeartFill />
        </Link>

        <Link to='/signing' className='header__links'>
          {user ? <BsFillPersonCheckFill /> : <BsFillPersonDashFill />}
        </Link>

        <Link to='/cart' className='header__links'><FaShoppingCart />
          {quantity}
          
        </Link></div>
      </ul>
    </div>
  )
}

export default Header
