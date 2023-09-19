import HomePages from "./pages/HomePages";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import ProductListPage from "./pages/ProductListPage";
import CartPages from "./pages/CartPages";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./user/UserProfilePage";
import UserCartDetails from "./user/UserCartDetails";
import UserOrderDetail from "./user/UserOrderDetail";
import ProtectedRoutesComponents from "./Component/ProtectedRoutesComponents";

function App() {

  return (
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePages/>}/>
 <Route path="/product-list" element={<ProductListPage/>}/>
 <Route path="/product-detail" element={<ProductDetailsPage/>}/>
<Route path="/cart" element={<CartPages/>}/> 
 <Route path="/login" element={<LoginPage/>}/>
 <Route path="/register" element={<RegisterPage/>}/>

 <Route path="*" element="hhhhhh"/>
<Route element={<ProtectedRoutesComponents/>}>
<Route path="/user" element={<UserProfilePage/>}/>
<Route path="/user/my-orders" element={<UserOrderDetail/>}/>
<Route path="/user/cart-details" element={<UserCartDetails/>}/>
<Route path="/user/order-details" element={<UserOrderDetail/>} />
</Route>
  </Routes>
  
   
   </BrowserRouter>
  
    
  );
}

export default App;
