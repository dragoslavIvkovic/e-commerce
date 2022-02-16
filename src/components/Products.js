
import { useDispatch, useSelector } from 'react-redux'
import '../_styles/Products.css'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/cartReducer'

const Products = ({ filter, searchQuery }) => {
  const { products } = useSelector(state => state.sneakers)
  const { filteredProducts } = useSelector(state => state.sneakers)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  let searchResult

  if (searchQuery) {
    searchResult = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className='container'>
      {' '}
      <div className='product__container'>
      
        {!filter &&
          !searchQuery &&
          products.map(product => (
            
            <div id={product.id} key={product.id} className='product__card'>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
              />{' '}
              <p className='product__title'>{product.title}</p>
              <p className='product__price'>{product.price}</p>
              <p className='product__category'>{product.category}</p>
              <button onClick={() => navigate(`/${product.id}`)}>
                Product details
              </button>
              <button onClick={(e) => dispatch(addToCart(product))}>
                Add to cart{console.log(product)}
              </button>
            </div>
          ))}

        
        {filter && searchQuery &&
          filteredProducts.map(product => (
            <div key={product.id} className='product__card'>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
              />{' '}
             <p className='product__title'>{product.title}</p>
              <p className='product__price'>{product.price}</p>
              <p className='product__category'>{product.category}</p>
            </div>
          ))}

          {searchQuery &&
          searchResult.map(product => (
            <div id={product.id} key={product.id} className='product__card'>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
              />{' '}
              <p className='product__title'>{product.title}</p>
              <p className='product__price'>{product.price}</p>
              <p className='product__category'>{product.category}</p>
            </div>
          ))}

      </div>
    </div>
  )
}

export default Products
