import { Provider } from "react-redux";
import { Home } from "./pages/Home/Home";
import { AppRouter } from "./routes/AppRouter";
import { store } from "./features/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter>
          <Home />
        </AppRouter>
      </Provider>
    </>
  );
}

export default App;
