import { ProviderProduct } from "./assets/context/ProviderProduct";
import { Home } from "./pages/Home/Home";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <ProviderProduct>
        <AppRouter>
          <Home />
        </AppRouter>
      </ProviderProduct>
    </>
  );
}

export default App;
