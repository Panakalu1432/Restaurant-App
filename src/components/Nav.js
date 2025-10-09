import {FaShoppingCart} from 'react-icons/fa'
import {
  Navbar,
  HeadNav,
  CartBadge,
  ParaNav,
  CartWrapper,
  Cartnav,
} from './StyledComponents'

const Nav = props => {
  const {name, NocartItem} = props

  const a = String(name).split('-')

  return (
    <Navbar>
      <HeadNav>{a[0]}</HeadNav>
      <Cartnav>
        <ParaNav>My Orders</ParaNav>
        <CartWrapper>
          <FaShoppingCart />
          <CartBadge>{NocartItem}</CartBadge>
        </CartWrapper>
      </Cartnav>
    </Navbar>
  )
}

export default Nav
