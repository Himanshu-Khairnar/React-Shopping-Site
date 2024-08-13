import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Shopcategory from "./Pages/Shopcategory.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Shopcategory category='men' banner={men_banner} />} />
          <Route path="/women" element={<Shopcategory category='women' banner={women_banner}/> } />
          <Route path="/kids" element={<Shopcategory category='kid' banner={kid_banner}/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
