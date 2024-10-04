import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Furnitures from "./components/Categories-pages/Furnitures";
import Electronics from "./components/Categories-pages/Electronics";
import Lamps from "./components/Categories-pages/Lamps";
import Kitchen from "./components/Categories-pages/Kitchen";
import Chairs from "./components/Categories-pages/Chairs";
import SkinCare from "./components/Categories-pages/SkinCare";
import ProductPage, { CartContext } from "./pages/ProductPage";
import OurProducts from "./pages/OurProducts";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index exact path="/salam-enterprises-eccomerce-website/" element={<Home />} />

        <Route path="/salam-enterprises-eccomerce-website/categories" element={<Categories />}>
          <Route path="/salam-enterprises-eccomerce-website/categories/all" element={<All />} />
          <Route path="/salam-enterprises-eccomerce-website/categories/furnitures" element={<Furnitures />} />
          <Route path="/salam-enterprises-eccomerce-website/categories/electronics" element={<Electronics />} />
          <Route path="/salam-enterprises-eccomerce-website/categories/lamps" element={<Lamps />} />
          <Route path="/salam-enterprises-eccomerce-website/categories/kitchen" element={<Kitchen />} />
          <Route path="/salam-enterprises-eccomerce-website/categories/chairs" element={<Chairs />} />
          <Route path="/salam-enterprises-eccomerce-website/categories/skin-care" element={<SkinCare />} />
        </Route>
        <Route path="/salam-enterprises-eccomerce-website/categories/product/:id" element={<ProductPage />} />
        <Route path="/salam-enterprises-eccomerce-website/our-products" element={<OurProducts />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
