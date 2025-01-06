import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { ResponsiveAppBar } from "../components/ResponsiveAppBar";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
