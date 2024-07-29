import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./landing.module.css";
import { Button, Container } from "@mui/material";
const Landing = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");
  const newPath = pathArray.slice(0, pathArray.length - 1).join("/") || "/";

  return (
    <>
      <div className={styles.btn_back}>
        <Link to={newPath}>
          <Button
            variant="contained"
            className="!bg-gray-600 !text-white hover:!bg-gray-800 hover:!text-white"
          >
            Back
          </Button>
        </Link>
      </div>
      <Container component={"div"} className={styles.container} maxWidth="md">
        <div className={styles.logo}>
          <img src="/topcit-logo.webp" alt="logo" />
          <h1>An Online Reviewer</h1>
        </div>
        <Outlet />
      </Container>
    </>
  );
};

export default Landing;
