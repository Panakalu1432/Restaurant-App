import {useState} from 'react'
import CartContext from './src/context/CartContext'

const CartProvider = ({children}) => {
  const [cartList, setCartList] = useState([])

  const addCartItem = dish => {
    const existingItem = cartList.find(item => item.dish_id === dish.dish_id)

    if (existingItem) {
      incrementCartItemQuantity(dish.dish_id)
    } else {
      setCartList([...cartList, {...dish, quantity: 1}])
    }
  }

  const incrementCartItemQuantity = id => {
    setCartList(prev =>
      prev.map(item =>
        item.dish_id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    setCartList(prev =>
      prev
        .map(item =>
          item.dish_id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    )
  }

  const removeCartItem = id => {
    setCartList(prev => prev.filter(item => item.dish_id !== id))
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
