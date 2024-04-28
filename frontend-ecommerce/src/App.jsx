import './App.css'
import Home from './pages/home/home';
import Cart from './pages/cart/Cart'
import ShopCategory from './pages/shopCategory/ShopCategory'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ProductDetail from './pages/productDetails/ProductDetail'
import { HeadingContent } from './components/headingContent/headingContent';


function App() {

  return (
    <>
    <BrowserRouter>
    <HeadingContent/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productdetail' element={<ProductDetail category="Best Collections"/>}/>
      <Route path='/bestcollections' element={<ShopCategory category="Best Collections"/>}/>
      <Route path='/foundation' element={<ShopCategory category="Foundation"/>}/>
      <Route path='/facepowder' element={<ShopCategory category="Face Poweder"/>}/>
      <Route path='/eyemascara' element={<ShopCategory category="Eye Mascara"/>}/>
      <Route path='/eyeliner' element={<ShopCategory category="Eye Liner"/>}/>
      <Route path='/blushan' element={<ShopCategory category="Blushan"/>}/>
      <Route path='/highlighters' element={<ShopCategory category="Highlighters"/>}/>
      <Route path='/lipsticks' element={<ShopCategory category="Lipsticks"/>}/>
      <Route path='/lipgloss' element={<ShopCategory category="Lipgloss"/>}/>
      <Route path='/hairproducts' element={<ShopCategory category="Hair Products"/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
