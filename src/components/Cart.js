import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity
} from "../redux/cartSlice";
import StripeCheckout from "react-stripe-checkout";
 import { toast } from "react-toastify";
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import "../_styles/Cart.css";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
console.log(totalAmount.toFixed(2))
  if (quantity === 0) {
    return <h2 className="no-items">No items in cart...</h2>;
  }
 const handleToken = token => {
    console.log('token')
  }

  console.log(dispatch)
  return (
    <div className="cart__container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => {
          const { title, price, img, quantity } = item;
          return (
            <div className="cart-item" key={index}>
             
                <img src={img} alt={title} className="product-image" />
              
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

        <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={totalAmount.toFixed(2) * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>

  );
};

export default Cart;
