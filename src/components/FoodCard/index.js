import CartContext from './src/context/CartContext'
import {FoodItemContainer} from './src/components/StyledComponents'
import Dishes from './../Dishes'

const Foocard = props => {
  const {item} = props
  const {categoryDishes} = item

  return (
    <CartContext.Consumer>
      {value => {
        const {
          addCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        } = value

        return (
          <FoodItemContainer>
            {categoryDishes.map(each => (
              <Dishes
                key={each.dish_id}
                dish={each}
                addCartItem={addCartItem}
                incrementCartItemQuantity={incrementCartItemQuantity}
                decrementCartItemQuantity={decrementCartItemQuantity}
              />
            ))}
          </FoodItemContainer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Foocard
