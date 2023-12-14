import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./layouts/UserLayout"
import Home from "./user/pages/Home"
import Product_Detail from "./user/pages/Product_Detail"
import About from "./user/pages/About"
import Shop from "./user/pages/Shop"
import Order from "./user/pages/Order"
import CheckOut from "./user/pages/CheckOut"
import Login from "./user/pages/auth/Login"
import SignUp from "./user/pages/auth/SignUp"
import Reset_Password from "./user/pages/auth/Reset_Password"
import Forgot_Password from "./user/pages/auth/Forgot_Password"
import Account from "./user/pages/auth/Account"
import Favorite_List from "./user/pages/Favorite_List"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <UserLayout /> }>
        <Route index element={ <Home /> }/>
        <Route path="/account" element={ <Account /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot_password" element={<Forgot_Password/>}/>
        <Route path="/reset_password" element={<Reset_Password/>}/>
        <Route path="/product_detail" element={<Product_Detail/>}/>
        <Route path="/about_us" element={<About/>}/>
        <Route path="/favorite" element={<Favorite_List/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App