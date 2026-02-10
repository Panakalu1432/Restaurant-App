import {useEffect, useState} from 'react'
import CartContext from './src/context/CartContext'
import NavBar from '../NavBar'
import FoodCard from '../FoodCard'

const Home = () => {
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await res.json()
      setMenuList(data[0].table_menu_list)
    }
    fetchData()
  }, [])

  return (
    <>
      <NavBar />
      {menuList.map(each => (
        <FoodCard key={each.menu_category_id} item={each} />
      ))}
    </>
  )
}

export default Home
