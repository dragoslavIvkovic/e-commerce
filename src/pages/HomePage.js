import '../_styles/HomePage.css'
import React, { useState } from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../redux/product-state'
import SearchBar from '../components/SearchBar'

export const HomePage = () => {
  const [filter, setFilter] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState("")
  const dispatch = useDispatch()

  const categoryChangeHandler = category => {
    setCurrentCategory(category)
    if (category === 'All categories') {
      setFilter(false)
    } else {
      setSearchQuery(" ")
      dispatch(filterProducts(category))
      setFilter(true)
    }
  }

const searchChangeHandler = (query) => {
setCurrentCategory("");
setFilter(false);
setSearchQuery(query);
}



  return (
    <div className='grid-container'>
      <div className='header'>Header</div>

      <nav className='filters'>
        <Categories
          currentCategory={currentCategory}
          categoryChangeHandler={categoryChangeHandler}
        />
      </nav>
      <div className='products__container--grid'>
        <SearchBar  value={searchQuery} onChange={searchChangeHandler}/>
        <Products filter={filter} searchQuery={searchQuery}/>
      </div>

      <div className='footer'></div>
    </div>
  )
}
