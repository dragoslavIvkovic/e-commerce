import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SingleProduct from './components/SingleProduct'

import { HomePage } from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
            <Route exact path="/:id" element={<SingleProduct/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
