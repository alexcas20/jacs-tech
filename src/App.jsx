import { Provider } from "react-redux";
import { ProviderProduct } from "./context/ProviderProduct";
import { Home } from "./pages/Home/Home";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./features/store";

function App() {
  return (
    <>
    {/*   <ProviderProduct> */}

    <Provider store={store}>
    <AppRouter>
          <Home />
        </AppRouter>
    </Provider>
       
   {/*    </ProviderProduct> */}
    </>
  );
}

export default App;
