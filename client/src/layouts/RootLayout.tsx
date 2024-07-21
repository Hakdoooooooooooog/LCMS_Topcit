import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Header from "../components/ui/Header";
import { homeRoutes } from "../navigation/Routes";
import { dotWave } from "ldrs";
import { green } from "@mui/material/colors";
import { useLoadingState } from "../hooks/useLoadingState";
dotWave.register();

const RootLayout = () => {
  const location = useLocation();
  const { isLoading } = useLoadingState();
  const isLanding =
    location.pathname === "/landing" ||
    location.pathname === "/landing/register" ||
    location.pathname === "/landing/forgot-password";
  return (
    <>
      {isLoading ? (
        <main className={styles.loadingLayout}>
          <l-dot-wave size="100" speed="1" color={green[700]}></l-dot-wave>
        </main>
      ) : (
        <>
          {isLanding ? (
            <main className={styles.rootLayout}>
              <Outlet />
            </main>
          ) : (
            <main className={styles.rootLayout}>
              <Header links={homeRoutes} styles={styles} />
              <Outlet />
            </main>
          )}
        </>
      )}
    </>
  );
};

export default RootLayout;
