
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Header from '../pages/Header'
import "../_styles/SingleProduct.css"
import { addToCart } from '../redux/cartSlice'



function SingleProduct () {
  const { products } = useSelector(state => state.sneakers)
  const { id } = useParams()

  const thisProduct = products.filter(product => product.id == id)

 const dispatch = useDispatch()

  return (
   <>
    <Header/> 
     
    <div className="single__product">
      {thisProduct.map(product => (
         <div id={product.id} key={product.id} className='product__card--single'>
         <div className="product__left">
             
              <img
                src={product.img}
                alt={product.title}
                className='product__img--single'
                
              /></div>
              <div className='product__right'>
               <p className='product__title--single'>{product.title}</p>
               <p className='product__desc'> {product.desc}</p>
                <p className='product__price--single'>
                  {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })} </p>
                  <p className="single__product--sizes">{product.size.map(sizes => {
                 return  <h4 className="single__product--singleSize">{sizes}</h4>
                  })}
                </p>
                  <p className="single__product--color">{product.colors.map(color => {
                 return  <h4 className="single__product--singleColor">{color}</h4>
                  })}
                </p>
              
              <button onClick={e => dispatch(addToCart(product))}>
                Add to cart{console.log(product)}
              </button>
            </div></div>
      ))}
    </div> </>
  )
}

export default SingleProduct
