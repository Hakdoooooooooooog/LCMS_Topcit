import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.about_wrapper}>
        <div className={styles.topcit}>
          <h1 className={styles.title}>
            About <span>TOPCIT</span>
          </h1>

          <Card sx={{ padding: 5, width: "fit-content", borderRadius: 5 }}>
            <h1 className={styles.title}>
              <span>TOPCIT</span>
            </h1>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                TOPCIT is a national examination that evaluates the basic
                abilities of software developers. It is conducted by the
                Ministry of Science and ICT and supervised by the National IT
                Industry Promotion Agency (NIPA).
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The exam consists of 4 sections: Programming, Database, Web, and
                Basic IT. The exam is conducted in Korean and is held twice a
                year.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                The exam is designed to evaluate the basic abilities of software
                developers and is used as a reference for hiring in the IT
                industry.
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
                href="https://topcit.or.kr"
                size="small"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
