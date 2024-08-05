import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { mirage } from "ldrs";
import { Box, CardActions, Container, Tooltip } from "@mui/material";
import { LibraryBooks, MenuBook, PermMedia, Toc } from "@mui/icons-material";
import styles from "./LearningHubLayout.module.css";
import SearchInput from "../components/ui/SearchInput/SearchInput";
mirage.register();

const LearningHubLayout = () => {
  return (
    <Container maxWidth="xl" className="mt-10">
      <h1 className="text-4xl font-semibold mb-12">
        Learning <span className="text-green-800">Hub</span>
      </h1>
      <CardActions
        classes={{
          root: styles.cardActions,
        }}
        className="bg-white mb-5 rounded-md"
      >
        <Box component={"div"} sx={{ flexGrow: 1 }} className="flex gap-x-6">
          <Tooltip title="Syllabus">
            <NavLink className={styles.btn} to="syllabus">
              <MenuBook
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </NavLink>
          </Tooltip>
          <Tooltip title="Media">
            <NavLink className={styles.btn} to="media">
              <PermMedia
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </NavLink>
          </Tooltip>
          <Tooltip title="Contents">
            <NavLink className={styles.btn} to="contents">
              <Toc
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </NavLink>
          </Tooltip>
          <Tooltip title="Resource Library">
            <NavLink className={styles.btn} to="resource-library">
              <LibraryBooks
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </NavLink>
          </Tooltip>
        </Box>

        <SearchInput />
      </CardActions>

      <Suspense
        fallback={<l-mirage size={100} speed={2.5} color={"green"}></l-mirage>}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default LearningHubLayout;
