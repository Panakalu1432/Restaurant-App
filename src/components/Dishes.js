import {useState} from 'react'
import {
  DishCard,
  DishLeft,
  DishHeader,
  VegIcon,
  Price,
  Description,
  Calories,
  DishRight,
  DishImage,
  Counter,
  CustomizationText,
  DishNotAv,
  NonVegIcon,
} from './StyledComponents'

const Dishes = props => {
  const {dish, onIncrementCartItem, onDecrementCartItem} = props
  const [itemCo, setItemCo] = useState(0)
  const {
    addonCat,
    dish_Availability,
    dish_Type,
    dish_calories,
    dish_currency,
    dish_description,
    dish_id,
    dish_image,
    dish_name,
    dish_price,
    nexturl,
  } = dish

  return (
    <DishCard>
      <DishLeft>
        <DishHeader>
          {dish_Type === 2 ? <VegIcon /> : <NonVegIcon />}
          <h3>{dish.dish_name}</h3>
        </DishHeader>
        <Price>
          {dish.dish_currency} {dish.dish_price}
        </Price>
        <Description>{dish.dish_description}</Description>
        <Calories>{dish.dish_calories} calories</Calories>
        {dish_Availability ? (
          <Counter>
            <button
              onClick={() => {
                if (itemCo > 0) {
                  setItemCo(itemCo - 1)
                  onDecrementCartItem()
                }
              }}
            >
              -
            </button>
            <span>{itemCo}</span>
            <button
              onClick={() => {
                setItemCo(itemCo + 1)
                onIncrementCartItem()
              }}
            >
              +
            </button>
          </Counter>
        ) : (
          <DishNotAv>Not available</DishNotAv>
        )}
        <CustomizationText>
          {dish.addonCat.length > 0 ? 'Customizations available' : null}
        </CustomizationText>
      </DishLeft>

      <DishRight>
        <DishImage src={dish.dish_image} alt={dish.dish_name} />
      </DishRight>
    </DishCard>
  )
}

export default Dishes
