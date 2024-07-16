import { Button } from "@mui/material";

import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <section className={styles.hero_wrapper}>
        <div className={styles.hero_content}>
          <div className={styles.hero_content_left}>
            <h1 className={styles.hero_title}>Welcome, user1!</h1>
            <p className={styles.hero_description}>
              This is your one-stop online learning content management system in
              preparing for your TOPCIT examination.
            </p>

            <Button
              href="about"
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
          </div>
          <div className={styles.hero_content_right}>
            <img src="hero-img.png" alt="Hero" className={styles.hero_image} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
