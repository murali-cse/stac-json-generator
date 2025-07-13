import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-100 flex-none">sidebar links</div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
