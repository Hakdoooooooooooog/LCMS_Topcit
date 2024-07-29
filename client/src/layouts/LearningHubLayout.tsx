import { Suspense } from "react";
import { mirage } from "ldrs";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Tooltip,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./LearningHubLayout.module.css";
import SearchInput from "../components/ui/SearchInput/SearchInput";
import { LibraryBooks, MenuBook, PermMedia, Toc } from "@mui/icons-material";

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
            <Button className={styles.btn} component={NavLink} to="syllabus">
              <MenuBook
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </Button>
          </Tooltip>
          <Tooltip title="Media">
            <Button className={styles.btn} component={NavLink} to="media">
              <PermMedia
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </Button>
          </Tooltip>
          <Tooltip title="Contents">
            <Button className={styles.btn} component={NavLink} to="contents">
              <Toc
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </Button>
          </Tooltip>
          <Tooltip title="Resource Library">
            <Button
              className={styles.btn}
              component={NavLink}
              to="resource-library"
            >
              <LibraryBooks
                classes={{
                  root: "fill-current text-green-800",
                }}
              />
            </Button>
          </Tooltip>
        </Box>

        <SearchInput />
      </CardActions>

      <Card>
        <CardContent>
          <Suspense
            fallback={
              <l-mirage size={100} speed={2.5} color={"green"}></l-mirage>
            }
          >
            <Outlet />
          </Suspense>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LearningHubLayout;
