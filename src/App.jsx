import "./App.css";
import { ProviderProduct } from "./assets/context/ProviderProduct";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
    <ProviderProduct>
    <Home />
    </ProviderProduct>
     
    </>
  );
}

export default App;
