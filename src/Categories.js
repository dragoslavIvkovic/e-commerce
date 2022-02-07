import React from 'react'
import { useSelector } from 'react-redux'

const Categories = ({ currentCategory, categoryChangeHandler }) => {
  const { products } = useSelector((state) => state.product)
  const categories = []
  products.map(product => categories.push(product.category))
  const categoriesFinal = ['All categories', ...new Set(categories)]

  return (
    <ul className='list-group'>
      {categoriesFinal.map(category => (
        <button
          key={category}
          className={
            category === currentCategory
              ? 'list-group-item active'
              : 'list-group-item'
          }
          onClick={() => categoryChangeHandler(category)}
        >
          {category}
        </button>
      ))}
    </ul>
  )
}
export default Categories;
