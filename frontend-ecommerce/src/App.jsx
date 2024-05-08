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
      <Route path='/productdetail' element={<ProductDetail />}/>
      <Route path='/skinprimer' element={<ShopCategory category="Skin Primer"/>}/>
      <Route path='/foundations' element={<ShopCategory category="Foundation"/>}/>
      <Route path='/facepowder' element={<ShopCategory category="Face Powder"/>}/>
      <Route path='/mascara&eyeliner' element={<ShopCategory category="Mascara & Eye Liner"/>}/>
      <Route path='/blushan&highlighters' element={<ShopCategory category="Blushan & Highlighter"/>}/>
      <Route path='/lipsticks&lipgloss' element={<ShopCategory category="Lipsticks & Lipgloss"/>}/>
      <Route path='/makupfixer' element={<ShopCategory category="Makup Fixer"/>}/>
      <Route path='/makupalltools' element={<ShopCategory category="Makup All Tools"/>}/>
      <Route path='/hairproducts' element={<ShopCategory category="Hair Products"/>}/>
      <Route path='/perfums' element={<ShopCategory category="Perfums"/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
