import React from 'react'
import {  useSelector } from 'react-redux'

const Products = ({ filter }) => {
  const { products } = useSelector(state => state.product)
  const { filteredProducts } = useSelector(state => state.product)

  return (
    <div>
      {!filter &&
        products.map(product => (
          <div id={product.id}>
            <p>{product.title}</p>
            <img
              src={product.img}
              alt={product.title}
              style={{ width: '400px' }}
            />
          </div>
        ))}

      {filter &&
        filteredProducts.map(product => (
          <div key={product.id}>
            <p>{product.title}</p>
            <img
              src={product.img}
              alt={product.title}
              style={{ width: '300' }}
            />
          </div>
        ))}
    </div>
  )
}

export default Products
