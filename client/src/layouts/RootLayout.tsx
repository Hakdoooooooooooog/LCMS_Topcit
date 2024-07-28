import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Header from "../components/ui/Header/Header";
import { homeRoutes } from "../navigation/RouteLinks";
import { Suspense } from "react";
import LoadingScreen from "../components/ui/LoadingScreen/LoadingScreen";

const RootLayout = () => {
  const location = useLocation();
  const isLanding =
    location.pathname === "/landing" ||
    location.pathname === "/landing/register" ||
    location.pathname === "/landing/forgot-password";
  return (
    <>
      {isLanding ? (
        <main className={styles.rootLayout}>
          <Suspense fallback={<LoadingScreen />} key={location.key}>
            <Outlet />
          </Suspense>
        </main>
      ) : (
        <div className={styles.rootLayout}>
          <Header links={homeRoutes} />
          <main>
            <Suspense fallback={<LoadingScreen />} key={location.key}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      )}
    </>
  );
};

export default RootLayout;
