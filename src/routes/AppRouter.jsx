import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Products } from "../pages/Products/Products";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { ProductDetail} from "../pages/ProductDetail/ProductDetail";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
