import { useDispatch, useSelector } from 'react-redux'
import '../_styles/Products.css'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import "../_styles/cartBtn.css"
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
              <p className='product__title'>{product.title}</p>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
                onClick={() => navigate(`/${product.id}`)}
              />{' '}
              <div className='product__text'>
                <p className='product__price'>
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </p>
              </div>
              <button className="add__toCart--btn" onClick={e => dispatch(addToCart(product))}>
                Add to cart{console.log(product)}
              </button>
            </div>
          ))}

        {filter &&
          searchQuery &&
          filteredProducts.map(product => (
             <div id={product.id} key={product.id} className='product__card'>
              <p className='product__title'>{product.title}</p>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
                onClick={() => navigate(`/${product.id}`)}
              />{' '}
              <div className='product__text'>
                <p className='product__price'>
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </p>
              </div>
              <button  className="add__toCart--btn" onClick={e => dispatch(addToCart(product))}>
                Add to cart{console.log(product)}
              </button>
            </div>
          ))}

        {searchQuery &&
          searchResult.map(product => (
             <div id={product.id} key={product.id} className='product__card'>
              <p className='product__title'>{product.title}</p>
              <img
                src={product.img}
                alt={product.title}
                className='product__img'
                onClick={() => navigate(`/${product.id}`)}
              />{' '}
              <div className='product__text'>
                <p className='product__price'>
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </p>
              </div>
              <button className="add__toCart--btn" onClick={e => dispatch(addToCart(product))}>
                Add to cart{console.log(product)}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Products
