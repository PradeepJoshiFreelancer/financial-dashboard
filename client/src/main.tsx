import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./states/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
