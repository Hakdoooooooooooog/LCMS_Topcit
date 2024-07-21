import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routes } from "./navigation/Routes";

function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
