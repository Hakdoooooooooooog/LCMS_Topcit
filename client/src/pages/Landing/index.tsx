import { Outlet } from "react-router-dom";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/topcit-logo.png" alt="logo" />
          <h1>An Online Reviewer</h1>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Landing;
