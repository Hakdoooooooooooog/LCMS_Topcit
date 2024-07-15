import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import RootLayout from "./layouts/RootLayout";
import { Login } from "./pages/Landing/Login";
import Register from "./pages/Landing/Register";
import ForgotPassword from "./pages/Landing/Forgot-Password";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="landing" element={<Landing />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </>
  )
);
