import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartProvider from './context/CartProvider'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/not-found" component={NotFound} />
      </Switch>
    </CartProvider>
  </BrowserRouter>
)

export default App
