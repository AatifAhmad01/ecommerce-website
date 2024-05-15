import { useEffect } from 'react';
import './App.css'
import Home from './pages/home/home';
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/checkout';
import ShopCategory from './pages/shopCategory/ShopCategory'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ProductDetail from './pages/productDetails/ProductDetail'
import { HeadingContent } from './components/headingContent/headingContent';

import { useDispatch } from 'react-redux';
import { addAllItems } from './redux/slices/cartSlice';


function App() {

  const dispath = useDispatch()


  useEffect(() => {

    const localItems = localStorage.getItem("cartItems");

    console.log(JSON.parse(localItems));

    dispath(addAllItems(JSON.parse(localItems).items))

  }, [])

  return (
    <>
        <BrowserRouter>
            <HeadingContent/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
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
