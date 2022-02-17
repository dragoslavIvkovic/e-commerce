import React from 'react'
import { useSelector } from 'react-redux'

import '../_styles/Categories.css'

const Categories = ({ currentCategory, categoryChangeHandler }) => {
  const { products } = useSelector(state => state.sneakers)
  const categories = []
  products.map(product => categories.push(product.category))
  const categoriesFinal = ['All categories', ...new Set(categories)]

  return (
    <ul className='list-group'>
    <p className="name_category">category</p>
      {categoriesFinal.map(category => (
        <li
          key={category}
          className={
            category === currentCategory
              ? 'list-group-item active'
              : 'list-group-item'
          }
          onClick={() => categoryChangeHandler(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
export default Categories
