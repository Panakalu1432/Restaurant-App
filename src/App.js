import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartProvider from './src/context/CartProvider'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './src/components/NotFound'

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </CartProvider>
  </BrowserRouter>
)

export default App
