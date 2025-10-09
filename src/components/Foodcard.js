import {FoodItemContainer} from './StyledComponents'
import Dishes from './Dishes'

const Foocard = props => {
  const {item, onIncrementCart, onDecrementCart} = props
  const {
    categoryDishes,
    menuCategory,
    menuCategoryId,
    menuCategoryImage,
    nexturl,
  } = item
  // const {addonCat,dish_Availability,dish_Type,dish_calories,dish_currency,dish_description,
  // dish_id,dish_image,dish_name,dish_price,nexturl} =

  return (
    <FoodItemContainer>
      {categoryDishes.map(each => (
        <Dishes
          key={each.dish_id}
          dish={each}
          onIncrementCartItem={onIncrementCart}
          onDecrementCartItem={onDecrementCart}
        />
      ))}
    </FoodItemContainer>
  )
}

export default Foocard
