import { useEffect } from 'react';
import './App.css'
import Home from './pages/home/home';
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/checkout';
import ShopCategory from './pages/shopCategory/ShopCategory'
import ShopBrand from './pages/shopBrand/shopBrand';
import { createHashRouter , Route, useLocation, RouterProvider, createRoutesFromElements}  from 'react-router-dom'
import ProductDetail from './pages/productDetails/ProductDetail'
import OrderPage from './pages/orderPage/orderPage';
import { useDispatch } from 'react-redux';
import { addAllItems } from './redux/slices/cartSlice';
import Layout from './layout';

function App() {


  const dispath = useDispatch()

  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='productdetail' element={<ProductDetail />}/>
        <Route path='orderPage' element={<OrderPage />}/>
        <Route path='skinprimer' element={<ShopCategory category="Skin Primer" heading={"Skin Primer"}/>}/>
        <Route path='foundations' element={<ShopCategory category="Foundation" heading={"Foundations"}/>}/>
        <Route path='facepowder' element={<ShopCategory category="Face Powder" heading={"Face Powder"}/>}/>
        <Route path='mascara&eyeliner' element={<ShopCategory category="Mascara & Eye Liner" heading={"Mascara & Eye Liner"}/>}/>
        <Route path='blushan&highlighters' element={<ShopCategory category="Blushan & Highlighter" heading={"Blushan & Highlighter"}/>}/>
        <Route path='lipsticks&lipgloss' element={<ShopCategory category="Lipsticks & Lipgloss" heading={"Lipsticks & Lipgloss"}/>}/>
        <Route path='makupfixer' element={<ShopCategory category="Makup Fixer" heading={"Makup Fixer"}/>}/>
        <Route path='makupalltools' element={<ShopCategory category="Makup All Tools" heading={"Makup All Tools"}/>}/>
        <Route path='hairproducts' element={<ShopCategory category="Hair Products" heading={"Hair Products"}/>}/>
        <Route path='nailpolish' element={<ShopCategory category="Nail Polish" heading={"Nail Polish"}/>}/>
        <Route path='eyeshadow' element={<ShopCategory category="Eyeshadow" heading={"Eyeshadow"}/>}/>

        <Route path='hudabeauty' element={<ShopBrand brand="Huda Beauty"/>}/>
        <Route path='lakemefacepowder' element={<ShopBrand brand="Lakme Facepowders"/>}/>
        <Route path='lakemefoundation' element={<ShopBrand brand="Lakme Foundation"/>}/>
        <Route path='anjilian' element={<ShopBrand brand="Anjilian"/>}/>
      </Route>
    )
  )

  useEffect(() => {

    const localItems = localStorage.getItem("cartItems");
    dispath(addAllItems(JSON.parse(localItems)?.items || []))
  }, [])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
