import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Header from "../components/ui/Header/Header";
import { homeRoutes } from "../navigation/RouteLinks";
import { Suspense } from "react";
import LoadingScreen from "../components/ui/LoadingScreen/LoadingScreen";
import { Container } from "@mui/material";

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
            <Container maxWidth={"xl"}>
              <Suspense fallback={<LoadingScreen />} key={location.key}>
                <Outlet />
              </Suspense>
            </Container>
          </main>
        </div>
      )}
    </>
  );
};

export default RootLayout;
