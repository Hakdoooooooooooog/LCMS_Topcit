import { Outlet, useLocation } from "react-router-dom";
import styles from "./landing.module.css";
import { Button } from "@mui/material";
const Landing = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");
  const newPath = pathArray.slice(0, pathArray.length - 1).join("/") || "/";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btn_back}>
          <Button href={newPath} variant="contained">
            Back
          </Button>
        </div>
        <div className={styles.logo}>
          <img src="/topcit-logo.png" alt="logo" />
          <h1>An Online Reviewer</h1>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Landing;
