import React, { useState } from 'react'
import Categories from './Categories'
import Products from './Products'
import { useDispatch } from 'react-redux'
import { filterProducts } from './redux/product-state'

const App = () => {
  const [filter, setFilter] = useState(false)
  const [currentCategory, setCurrentCategory] = useState("")
  const dispatch = useDispatch();

  const categoryChangeHandler = category => {
    setCurrentCategory(category)
    if (category === 'All categories') {
      setFilter(false)
    } else {
      dispatch(filterProducts(category))
      setFilter(true)
    }
  }

  return (
  <div className="container">
      <div className="row justify-content-center">
        <div className="title col-md-6">
      <Products filter={filter} />
      </div>
      </div>
     
      <div>
        <Categories
          currentCategory={currentCategory}
          categoryChangeHandler={categoryChangeHandler}
        />
      </div>
    </div>
  )
}

export default App
