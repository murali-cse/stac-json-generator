import "./App.css";
import { Outlet } from "react-router";
import Sidebar from "./sections/sidebar/sidebar.tsx";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-96 flex-none">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
