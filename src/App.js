import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartProvider from './context/CartProvider'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/not-found" component={NotFound} />
      </Switch>
    </CartProvider>
  </BrowserRouter>
)

export default App
