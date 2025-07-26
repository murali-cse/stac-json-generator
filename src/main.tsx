import { createBrowserRouter, RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter(routes);

const root = document.getElementById("root") as ReactDOM.Container;

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
