
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SingleProduct () {
  const { products } = useSelector(state => state.product)
  const { id } = useParams()

  const thisProduct = products.filter(product => product.id == id)

  console.log(thisProduct)

  return (
    <div>
      {thisProduct.map(product => (
        <div>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <img src={product.img} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default SingleProduct
