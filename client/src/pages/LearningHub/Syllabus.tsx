import { Add } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import styles from "./Syllabus.module.css";

const items = [
  {
    title: "Introduction",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro sequi dolorum impedit ipsum in aperiam doloremque, molestiae corporis officiis vel reiciendis incidunt optio delectus. Nostrum dolor quod reiciendis cum! Quia culpa illo voluptatibus provident facere velit blanditiis! Laborum error iste iusto eum fuga ea, nisi delectus est repellat eius, nobis excepturi ipsam. Hic doloribus autem error id et architecto.Maxime, labore quaerat. Molestiae dolor aliquam, voluptatem itaque nemo impedit nostrum dolorem quisquam ut facere repellat vitae deserunt numquam, animi autem illum doloremque. Molestias dolorum neque, repellat cumque rerum nisi?Recusandae expedita hic similique ea beatae doloribus, omnis in, ipsam labore neque illo? Ex dolore omnis sapiente, culpa eius laudantium esse placeat voluptatem libero atque! Temporibus qui odit aliquam ut. Vel cum asperiores, minus velit tempore nisi magni perferendis expedita cupiditate sint, eveniet dolores nulla repellendus, corporis aspernatur explicabo modi quae accusantium officiis recusandae? Suscipit et qui sint reprehenderit explicabo!",
  },
  {
    title: "Chapter 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro sequi dolorum impedit ipsum in aperiam doloremque, molestiae corporis officiis vel reiciendis incidunt optio delectus. Nostrum dolor quod reiciendis cum! Quia culpa illo voluptatibus provident facere velit blanditiis! Laborum error iste iusto eum fuga ea, nisi delectus est repellat eius, nobis excepturi ipsam. Hic doloribus autem error id et architecto.Maxime, labore quaerat. Molestiae dolor aliquam, voluptatem itaque nemo impedit nostrum dolorem quisquam ut facere repellat vitae deserunt numquam, animi autem illum doloremque. Molestias dolorum neque, repellat cumque rerum nisi?Recusandae expedita hic similique ea beatae doloribus, omnis in, ipsam labore neque illo? Ex dolore omnis sapiente, culpa eius laudantium esse placeat voluptatem libero atque! Temporibus qui odit aliquam ut. Vel cum asperiores, minus velit tempore nisi magni perferendis expedita cupiditate sint, eveniet dolores nulla repellendus, corporis aspernatur explicabo modi quae accusantium officiis recusandae? Suscipit et qui sint reprehenderit explicabo!",
  },
  {
    title: "Chapter 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro sequi dolorum impedit ipsum in aperiam doloremque, molestiae corporis officiis vel reiciendis incidunt optio delectus. Nostrum dolor quod reiciendis cum! Quia culpa illo voluptatibus provident facere velit blanditiis! Laborum error iste iusto eum fuga ea, nisi delectus est repellat eius, nobis excepturi ipsam. Hic doloribus autem error id et architecto.Maxime, labore quaerat. Molestiae dolor aliquam, voluptatem itaque nemo impedit nostrum dolorem quisquam ut facere repellat vitae deserunt numquam, animi",
  },
  {
    title: "Chapter 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro sequi dolorum impedit ipsum in aperiam doloremque, molestiae corporis officiis vel reiciendis incidunt optio delectus. Nostrum dolor quod reiciendis cum! Quia culpa illo voluptatibus provident facere velit blanditiis! Laborum error iste iusto eum fuga ea, nisi delectus est repellat eius, nobis excepturi ipsam. Hic doloribus autem error id et architecto.Maxime, labore quaerat. Molestiae dolor aliquam, voluptatem itaque nemo impedit nostrum dolorem quisquam ut facere repellat vitae deserunt numquam, animi autem illum doloremque. Molestias dolorum neque, repellat cumque rerum nisi?Recusandae expedita hic similique ea beatae doloribus, omnis in, ipsam labore neque illo? Ex dolore omnis sapiente, culpa eius laudantium esse placeat voluptatem libero atque! Temporibus qui odit aliquam ut. Vel cum asperiores, minus velit tempore nisi magni perferendis expedita cupiditate sint, eveniet dolores nulla repellendus, corporis aspernatur explicabo modi quae accusantium officiis recusandae? Suscipit et qui sint reprehenderit explicabo!",
  },
];

function Syllabus() {
  // Dynamically set the height of the bullet to match the height of the content
  useEffect(() => {
    const getElementHeight = () => {
      const accordionDetailsEl = document.querySelectorAll(
        ".MuiAccordionDetails-root"
      );

      accordionDetailsEl.forEach((item) => {
        let boxEl = item.querySelector("div") as HTMLElement;
        let bulletEl = item.querySelector(
          `.${styles["list__item--bullet"]}`
        ) as HTMLElement;
        if (boxEl && bulletEl) {
          let itemHeight = boxEl.clientHeight;
          bulletEl.style.height = `${itemHeight}px`;
        }
      });
    };
    getElementHeight();
    window.addEventListener("resize", getElementHeight);
    return () => {
      window.removeEventListener("resize", getElementHeight);
    };
  }, []);
  return (
    <Box component={"section"} className="flex flex-col gap-5">
      {items.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            aria-controls={`panel1a-content-${index}`}
            id={`panel1a-header-${index}`}
            expandIcon={
              <Add
                sx={{
                  color: "green",
                }}
              />
            }
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails
            classes={{
              root: styles.accordionDetailStyles,
            }}
          >
            <Box component="span" className={styles["list__item--bullet"]}>
              <Box
                component={"span"}
                className={styles["list__item--bullet-inner"]}
              />
            </Box>

            <Box component={"div"} sx={{ flexGrow: 1 }}>
              <Typography sx={{ whiteSpace: "pre-line" }}>
                {item.content}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  marginTop: "1rem",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Start Learning
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default Syllabus;
