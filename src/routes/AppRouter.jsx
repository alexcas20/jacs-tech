import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Products } from "../pages/Products/Products";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { Footer } from "../components/Footer/Footer";
import { Favorites } from "../pages/Favs/Favorites";
import { ScrollToPage } from "../components/shared/ScrollToPage";
import { AnimatedPage } from "../components/shared/AnimatedPage";
import { Toaster } from "react-hot-toast";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
          },
        }}
      />
        <ScrollToPage />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/products"
            element={
              <AnimatedPage>
                <Products />
              </AnimatedPage>
            }
          />
          <Route
            path="/product/:id"
            element={
              <AnimatedPage>
                <ProductDetail />
              </AnimatedPage>
            }
          />
          <Route
            path="/cart"
            element={
              <AnimatedPage>
                {" "}
                <Cart />
              </AnimatedPage>
            }
          />
          <Route
            path="/favs"
            element={
              <AnimatedPage>
                {" "}
                <Favorites />
              </AnimatedPage>
            }
          />
          <Route
            path="*"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
