import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddProductPage from "./pages/addProduct/addProduct.Page"
import CurrentOrdersPage from "./pages/currentOrders/currentOrders.Page"
import CompletedOrdersPage from "./pages/completedOrders/completedOrders.Page"
import Sidebar from "./components/sidebar/sidebar"
import UpdateProductPage from "./pages/updateProduct/updateProduct.Page"

function App() {

  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/addProduct" element={<AddProductPage/>}></Route>
        <Route path="/updateProduct" element={<UpdateProductPage/>}></Route>
        <Route path="/currentOrders" element={<CurrentOrdersPage/>}></Route>
        <Route path="/completedOrders" element={<CompletedOrdersPage/>}></Route>
      </Routes>
    </Router>

  )
}

export default App
