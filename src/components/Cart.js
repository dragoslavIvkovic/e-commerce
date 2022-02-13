import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity
} from "../redux/cartReducer";
 
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
// import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }


  console.log(dispatch)
  return (
    <div className="Cart container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => {
          const { title, price, img, quantity } = item;
          return (
            <div className="cart-item" key={index}>
              <div className="product-image">
                <img src={img} alt={title} />
              </div>
              <div className="product-title">
                <h2>{title}</h2>
                <h2 className="product-price">${price}</h2>
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Remove from cart
                </button>
              </div>
              <div className="quantity">
                <button onClick={() => dispatch(subtractItemQuantity(item))}>
                  <AiOutlineMinus />
                </button>
                <p>{quantity}</p>
                <button onClick={() => dispatch(addItemQuantity(item))}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="total">Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
