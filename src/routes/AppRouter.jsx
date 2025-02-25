import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Products } from "../pages/Products/Products";
import { ResponsiveAppBar } from "../components/layout/ResponsiveAppBar";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Footer } from "../components/layout/Footer";
import { Favorites } from "../pages/Favs/Favorites";
import { ScrollToPage } from "../components/shared/ScrollToPage";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "../components/layout/ScrollToTop";
import { Login } from "../pages/Login/Login";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favs" element={<Favorites />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#1e293b",
              color: "#fff",
            },
          }}
        />
        <ScrollToPage />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};
