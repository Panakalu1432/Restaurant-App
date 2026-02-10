import CartContext from '../../context/CartContext'
import {FoodItemContainer} from '../../StyledComponents'
import Dishes from './../Dishes'

const Foodcard = props => {
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

export default Foodcard
