import React, { useEffect } from 'react';
import './App.css'
import { createHashRouter, Route, RouterProvider, createRoutesFromElements}  from 'react-router-dom'
import Layout from './layout';
import Home from './pages/home/home';
// import Cart from './pages/cart/Cart'
// import Checkout from './pages/checkout/checkout';
// import ShopCategory from './pages/shopCategory/ShopCategory'
// import ShopBrand from './pages/shopBrand/shopBrand';
// import ProductDetail from './pages/productDetails/ProductDetail'
// import OrderPage from './pages/orderPage/orderPage';
import { useDispatch } from 'react-redux';
import { addAllItems } from './redux/slices/cartSlice';

// const LazyLayout = React.lazy(() => import('./layout'))
// const LazyHome = React.lazy(() => import('./pages/home/home'))

const LazyCart = React.lazy(() => import('./pages/cart/Cart'))
const LazyCheckout = React.lazy(() => import('./pages/checkout/checkout'))
const LazyCategory = React.lazy(() => import('./pages/shopCategory/ShopCategory'))
const LazyOrder = React.lazy(() => import('./pages/orderPage/orderPage'))
const LazyProductDetail = React.lazy(() => import('./pages/productDetails/ProductDetail'))
const LazyShopBrand = React.lazy(() => import('./pages/shopBrand/shopBrand'))

function App() {

  const dispath = useDispatch()

  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='cart' element={<React.Suspense><LazyCart/></React.Suspense> }/>
        <Route path='checkout' element={<React.Suspense><LazyCheckout/></React.Suspense>}/>
        <Route path='productdetail' element={<React.Suspense><LazyProductDetail/></React.Suspense>}/>
        <Route path='orderPage' element={<React.Suspense><LazyOrder/></React.Suspense>}/>
        <Route path='skinprimer' element={<React.Suspense><LazyCategory category="Skin Primer" heading={"Skin Primer"}/></React.Suspense> }/>
        <Route path='foundations' element={<React.Suspense><LazyCategory category="Foundation" heading={"Foundations"}/></React.Suspense>}/>
        <Route path='facepowder' element={<React.Suspense><LazyCategory category="Face Powder" heading={"Face Powder"}/></React.Suspense>}/>
        <Route path='mascara&eyeliner' element={<React.Suspense><LazyCategory category="Mascara & Eye Liner" heading={"Mascara & Eye Liner"}/></React.Suspense>}/>
        <Route path='blushan&highlighters' element={<React.Suspense><LazyCategory category="Blushan & Highlighter" heading={"Blushan & Highlighter"}/></React.Suspense>}/>
        <Route path='lipsticks&lipgloss' element={<React.Suspense><LazyCategory category="Lipsticks & Lipgloss" heading={"Lipsticks & Lipgloss"}/></React.Suspense>}/>
        <Route path='makupfixer' element={<React.Suspense><LazyCategory category="Makup Fixer" heading={"Makup Fixer"}/></React.Suspense>}/>
        <Route path='makupalltools' element={<React.Suspense><LazyCategory category="Makup All Tools" heading={"Makup All Tools"}/></React.Suspense>}/>
        <Route path='hairproducts' element={<React.Suspense><LazyCategory category="Hair Products" heading={"Hair Products"}/></React.Suspense>}/>
        <Route path='nailpolish' element={<React.Suspense><LazyCategory category="Nail Polish" heading={"Nail Polish"}/></React.Suspense>}/>
        <Route path='eyeshadow' element={<React.Suspense><LazyCategory category="Eyeshadow" heading={"Eyeshadow"}/></React.Suspense>}/>

        <Route path='hudabeauty' element={<React.Suspense><LazyShopBrand brand="Huda Beauty"/></React.Suspense>}/>
        <Route path='lakemefacepowder' element={<React.Suspense><LazyShopBrand brand="Lakme Facepowders"/></React.Suspense>}/>
        <Route path='lakemefoundation' element={<React.Suspense><LazyShopBrand brand="Lakme Foundation"/></React.Suspense>}/>
        <Route path='anjilian' element={<React.Suspense><LazyShopBrand brand="Anjilian"/></React.Suspense>}/>
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
