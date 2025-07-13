import { type RouteObject } from "react-router";
import App from "./App";
import Home from "./page/home-view";

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
