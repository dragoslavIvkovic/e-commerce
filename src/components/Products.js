import React from 'react'
import { useSelector } from 'react-redux'
import '../_styles/Products.css'

const Products = ({ filter, searchQuery }) => {
  const { products } = useSelector(state => state.product)
  const { filteredProducts } = useSelector(state => state.product)

  let searchResult;

  if (searchQuery) {
    searchResult = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className='container'>
      {' '}
      <div className='product__container'>
        {!filter && !searchQuery &&
          products.map(product => (
            <div id={product.id} className='product__card'>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
              />{' '}
              <p className='product__title'>{product.title}</p>
            </div>
          ))}


{
  searchQuery && searchResult.map(product => (
            <div id={product.id} className='product__card'>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
              />{' '}
              <p className='product__title'>{product.title}</p>
            </div>
          ))
}



        {filter &&
          filteredProducts.map(product => (
            <div key={product.id} className='product__card'>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
              />{' '}
              <p className='product__title'>{product.title}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Products
