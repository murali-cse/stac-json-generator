import { createBrowserRouter, RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import "./index.css";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const root = document.getElementById("root") as ReactDOM.Container;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
