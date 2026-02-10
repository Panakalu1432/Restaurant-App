import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'

// Import the styles we defined in the other file
import {
  NavContainer,
  LogoLink,
  LogoText,
  NavActions,
  StyledCartLink,
  CartCountBadge,
  LogoutButton,
} from './StyledComponents'

const NavBar = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartCount = cartList.length

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavContainer>
          <LogoLink to="/">
            <LogoText>
              Uni<span>Resto</span>
            </LogoText>
          </LogoLink>

          <NavActions>
            <StyledCartLink to="/cart">
              Cart
              {cartCount > 0 && <CartCountBadge>{cartCount}</CartCountBadge>}
            </StyledCartLink>

            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
          </NavActions>
        </NavContainer>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(NavBar)
