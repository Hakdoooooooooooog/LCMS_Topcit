import { Button, Container } from "@mui/material";

import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Container component={"section"} maxWidth="xl">
        <div className={styles.hero_content}>
          <div className={styles.hero_content_left}>
            <h1 className={styles.hero_title}>Welcome, user1!</h1>
            <p className={styles.hero_description}>
              This is your one-stop online learning content management system in
              preparing for your TOPCIT examination.
            </p>

            <Link to="/about" className={styles.hero_link}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#388E3C",
                  },
                  padding: "10px 20px",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
          <div className={styles.hero_content_right}>
            <img src="hero-img.png" alt="Hero" className={styles.hero_image} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
