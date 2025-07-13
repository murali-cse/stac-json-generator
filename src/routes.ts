import { type RouteObject } from "react-router";
import App from "./App";
import Home from "./home/home.view";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];
