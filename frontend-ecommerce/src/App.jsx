import { useEffect } from 'react';
import './App.css'
import Home from './pages/home/home';
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/checkout';
import ShopCategory from './pages/shopCategory/ShopCategory'
import ShopBrand from './pages/shopBrand/shopBrand';
import { BrowserRouter, Routes , Route}  from 'react-router-dom'
import ProductDetail from './pages/productDetails/ProductDetail'
import OrderPage from './pages/orderPage/orderPage';
import { HeadingContent } from './components/headingContent/headingContent';
import { useDispatch } from 'react-redux';
import { addAllItems } from './redux/slices/cartSlice';
import Footer from './components/footer/footer';

function App() {

  const dispath = useDispatch()


  useEffect(() => {

    const localItems = localStorage.getItem("cartItems");
    dispath(addAllItems(JSON.parse(localItems)?.items || []))
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
              <Route path='/orderPage' element={<OrderPage />}/>
              <Route path='/skinprimer' element={<ShopCategory category="Skin Primer"/>}/>
              <Route path='/foundations' element={<ShopCategory category="Foundation"/>}/>
              <Route path='/facepowder' element={<ShopCategory category="Face Powder"/>}/>
              <Route path='/mascara&eyeliner' element={<ShopCategory category="Mascara & Eye Liner"/>}/>
              <Route path='/blushan&highlighters' element={<ShopCategory category="Blushan & Highlighter"/>}/>
              <Route path='/lipsticks&lipgloss' element={<ShopCategory category="Lipsticks & Lipgloss"/>}/>
              <Route path='/makupfixer' element={<ShopCategory category="Makup Fixer"/>}/>
              <Route path='/makupalltools' element={<ShopCategory category="Makup All Tools"/>}/>
              <Route path='/hairproducts' element={<ShopCategory category="Hair Products"/>}/>
              <Route path='/nailpolish' element={<ShopCategory category="Nail Polish"/>}/>
              <Route path='/eyeshad' element={<ShopCategory category="Eyeshad"/>}/>

              <Route path='/hudabeauty' element={<ShopBrand brand="Huda Beauty"/>}/>
              <Route path='/lakemefacepowder' element={<ShopBrand brand="Lakeme Facepowders"/>}/>
              <Route path='/lakemefoundation' element={<ShopBrand brand="Lakme Foundation"/>}/>
              <Route path='/anjilian' element={<ShopBrand brand="Anjilian"/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
