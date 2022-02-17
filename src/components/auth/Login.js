import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        toast.success('Singed in user:', user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        toast.error('An error occured:', errorCode, errorMessage)
      })
  }

  return (
    <div>
      <ToastContainer />
      <h1>Login</h1>
      Email:
      <br />
      <input
        type='text'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      Password:
      <br />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Log In</button>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </div>
  )
}

export default Login
