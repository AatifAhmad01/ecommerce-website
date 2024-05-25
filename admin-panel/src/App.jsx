import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddProductPage from "./pages/addProduct/addProduct.Page"
import CurrentOrdersPage from "./pages/currentOrders/currentOrders.Page"
import CompletedOrdersPage from "./pages/completedOrders/completedOrders.Page"
import Sidebar from "./components/sidebar/sidebar"
import UpdateProductPage from "./pages/updateProduct/updateProduct.Page"
import AuthenticationPage from "./pages/authentication/authentication.Page"
import { useContext } from "react"
import { UserContext } from "./contexts/UserContext"

function App() {

  const userContext = useContext(UserContext);

  const AppScreens = () => {
    return<>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<AddProductPage/>}></Route>
        <Route path="/updateProduct" element={<UpdateProductPage/>}></Route>
        <Route path="/currentOrders" element={<CurrentOrdersPage/>}></Route>
        <Route path="/completedOrders" element={<CompletedOrdersPage/>}></Route>
      </Routes>
    </Router>
    </>
  }

  const Root = () =>
  {
    return<>
    {!userContext.user ? <AuthenticationPage/> : <AppScreens/>} 
    {/* {false ? <AuthenticationPage/> : <AppScreens/>}  */}
    </>
  }

  return (
    <Root/>
  )
}

export default App
