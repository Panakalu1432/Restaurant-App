import CartContext from './src/context/CartContext'
import NavBar from '../NavBar'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {
        cartList,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
        removeAllCartItems,
      } = value

      if (cartList.length === 0) {
        return (
          <>
            <NavBar />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
              alt="empty cart"
            />
          </>
        )
      }

      return (
        <>
          <NavBar />
          <button onClick={removeAllCartItems}>Remove All</button>

          {cartList.map(item => (
            <div key={item.dish_id}>
              <img src={item.dish_image} alt={item.dish_name} />
              <p>{item.dish_name}</p>
              <p>₹ {item.dish_price * item.quantity}</p>

              <button onClick={() => decrementCartItemQuantity(item.dish_id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementCartItemQuantity(item.dish_id)}>
                +
              </button>

              <button onClick={() => removeCartItem(item.dish_id)}>
                Remove
              </button>
            </div>
          ))}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
