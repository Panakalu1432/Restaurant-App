import {useState, useEffect} from 'react'
import './App.css'
import Nav from './components/Nav'
import Foodcard from './components/Foodcard'
import {
  CategoryContainer,
  CategoryList,
  CategoryButton,
  Container,
} from './StyledComponents'

const App = () => {
  const [dish, setDish] = useState({
    branchName: '',
    tableMenuList: [],
  })
  const [tab, setTab] = useState('')
  const [cartItem, setcartItems] = useState(0)

  useEffect(async () => {
    const fetchData = async () => {
      const res = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      if (res.ok) {
        const data = await res.json()
        const changeData = {
          branchName: data[0].branch_name,
          restaurantName: data[0].restaurant_name,
          restaurantId: data[0].restaurant_id,
          nextUrl: data[0].nexturl,
          restaurantImage: data[0].restaurant_image,
          tableId: data[0].table_id,
          tableMenuList: data[0].table_menu_list.map(each => {
            return {
              categoryDishes: each.category_dishes,
              menuCategory: each.menu_category,
              menuCategoryId: each.menu_category_id,
              menuCategoryImage: each.menu_category_image,
              nexturl: each.nexturl,
            }
          }),
          tableName: data[0].table_name,
        }

        console.log(changeData)
        setDish(changeData)
        setTab(changeData.tableMenuList[0].menuCategoryId)
      }
    }

    await fetchData()
  }, [])

  const onIncrementCart = () => {
    setcartItems(cartItem + 1)
  }
  const onDecrementCart = () => {
    setcartItems(cartItem - 1)
  }

  console.log(tab)
  return (
    <div>
      <Nav name={dish.branchName} NocartItem={cartItem} />
      <CategoryContainer>
        <CategoryList>
          {dish.tableMenuList.map(each => (
            <li key={each.menuCategoryId}>
              <CategoryButton
                onClick={() => setTab(each.menuCategoryId)}
                active={Number(tab) === Number(each.menuCategoryId)}
              >
                {each.menuCategory}
              </CategoryButton>
            </li>
          ))}
        </CategoryList>
      </CategoryContainer>
      <Container>
        {dish.tableMenuList.map(each => {
          if (Number(tab) === Number(each.menuCategoryId)) {
            return (
              <Foodcard
                item={each}
                key={each.menuCategoryId}
                onIncrementCart={onIncrementCart}
                onDecrementCart={onDecrementCart}
              />
            )
          }
        })}
      </Container>
    </div>
  )
}

export default App
