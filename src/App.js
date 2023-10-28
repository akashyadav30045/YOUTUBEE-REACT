import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./app/store";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;

