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
import { BsFillPersonCheckFill, BsFillPersonDashFill,BsHeartFill } from 'react-icons/bs'

function Header () {
  initializeApp(firebaseConfig)
  const auth = getAuth()
  const user = useSelector(state => state.auth.value)
  console.log('user from state', user)
  const dispatch = useDispatch()

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
      <ul>
        <li className='header__links'>
          <Link to='/'>Home</Link>
        </li>

        <li className='header__links'>
          <Link to='/protected'><BsHeartFill/></Link>
        </li>
        <li className='header__links'>
          <Link to='/signing'>
            {user ? <BsFillPersonCheckFill /> : <BsFillPersonDashFill />}
          </Link>
        </li>
        <li className='header__links'>
          <Link to='/cart' className='cart'>
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
