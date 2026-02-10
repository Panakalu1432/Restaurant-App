import CartContext from '../../context/CartContext'
import NavBar from '../NavBar'

import {
  CartContainer,
  CartContent,
  CartHeader,
  RemoveAllButton,
  CartList,
  CartItem,
  DishImage,
  DishDetails,
  DishName,
  DishPrice,
  QuantityContainer,
  QuantityButton,
  QuantityText,
  RemoveButton,
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCartText,
} from './StyledComponents'

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

      const showEmptyView = cartList.length === 0

      return (
        <CartContainer>
          <NavBar />
          {showEmptyView ? (
            <EmptyCartContainer>
              <EmptyCartImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                alt="empty cart"
              />
              <EmptyCartText>Your Cart Is Empty</EmptyCartText>
            </EmptyCartContainer>
          ) : (
            <CartContent>
              <CartHeader>
                <RemoveAllButton onClick={removeAllCartItems}>
                  Remove All
                </RemoveAllButton>
              </CartHeader>

              <CartList>
                {cartList.map(item => (
                  <CartItem key={item.dish_id}>
                    <DishImage src={item.dish_image} alt={item.dish_name} />

                    <DishDetails>
                      <DishName>{item.dish_name}</DishName>
                      <DishPrice>₹ {item.dish_price * item.quantity}</DishPrice>
                    </DishDetails>

                    <QuantityContainer>
                      <QuantityButton
                        onClick={() => decrementCartItemQuantity(item.dish_id)}
                      >
                        -
                      </QuantityButton>
                      <QuantityText>{item.quantity}</QuantityText>
                      <QuantityButton
                        onClick={() => incrementCartItemQuantity(item.dish_id)}
                      >
                        +
                      </QuantityButton>
                    </QuantityContainer>

                    <RemoveButton onClick={() => removeCartItem(item.dish_id)}>
                      Remove
                    </RemoveButton>
                  </CartItem>
                ))}
              </CartList>
            </CartContent>
          )}
        </CartContainer>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
