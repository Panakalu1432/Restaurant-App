import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from './src/context/CartContext'

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
        <nav>
          <Link to="/">
            <h1>Restaurant</h1>
          </Link>

          <Link to="/cart">Cart ({cartCount})</Link>

          <button onClick={onLogout}>Logout</button>
        </nav>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(NavBar)
