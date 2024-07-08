import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  const location = useLocation();
  const isLanding =
    location.pathname === "/landing" ||
    location.pathname === "/landing/register" ||
    location.pathname === "/landing/forgot-password";
  return (
    <>
      {isLanding ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <div className={styles.rootLayout}>
          <header>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="landing">Join Us!</NavLink>
            </nav>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
};

export default RootLayout;
