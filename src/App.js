import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'

import { HomePage } from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
            <Route   path="/:id" element={<SingleProduct/>} />
               <Route   path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
