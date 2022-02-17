import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Reset from './components/auth/Reset'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'

import { HomePage } from './pages/HomePage'
import SingIn  from './components/auth/SingIn'
import Header from './pages/Header'

const App = () => {
  return (
    <div>
    
      <Router> <Header/> 
        <Routes>
          <Route path='/' element={<HomePage />} />
            <Route   path="/:id" element={<SingleProduct/>} />
               <Route   path="/cart" element={<Cart/>} />
               <Route   path="/signing" element={<SingIn/>} />
               <Route   path="/login" element={<Login/>} />
               <Route   path="/register" element={<Register/>} />
               <Route   path="/reset" element={<Reset/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
