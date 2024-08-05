import { Outlet, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.css";
import Header from "../components/ui/Header/Header";
import { homeRoutes, path } from "../lib/constants";
import { Suspense } from "react";
import LoadingScreen from "../components/ui/LoadingScreen/LoadingScreen";
import { Container } from "@mui/material";

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      {path.includes(location.pathname) ? (
        <main className={styles.rootLayout}>
          <Suspense fallback={<LoadingScreen />} key={location.key}>
            <Outlet />
          </Suspense>
        </main>
      ) : (
        <main className={styles.rootLayout}>
          <Header links={homeRoutes} />
          <Container maxWidth={"xl"}>
            <Suspense fallback={<LoadingScreen />} key={location.key}>
              <Outlet />
            </Suspense>
          </Container>
        </main>
      )}
    </>
  );
};

export default RootLayout;
