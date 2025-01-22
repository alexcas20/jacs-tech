import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Products } from "../pages/Products/Products";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Footer } from "../components/Footer/Footer";
import { Favorites } from "../pages/Favs/Favorites";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favs" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
