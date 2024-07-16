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
              <div className={styles.main_link}>
                <NavLink to="/">
                  <img
                    src="logo-small.png"
                    alt="logo"
                    className={styles.logo}
                  />
                </NavLink>
              </div>

              <div className={styles.sub_links}>
                <NavLink to="learning-hub">Learning Hub</NavLink>
                <NavLink to="assessment">Assessment</NavLink>
                <NavLink to="progress-tracker">Progress Tracker</NavLink>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="landing">Join Us</NavLink>
              </div>
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
