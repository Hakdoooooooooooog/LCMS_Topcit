import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./LearningHubLayout.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const LearningHubLayout = () => {
  return (
    <section className="pt-8 px-20">
      <h1 className="text-4xl font-semibold mb-12">
        Learning <span className="text-green-800">Hub</span>
      </h1>
      <CardActions className="bg-white mb-5 rounded-md">
        <Box
          component={"div"}
          sx={{ flexGrow: 1 }}
          className="flex gap-x-6 ml-6"
        >
          <Button className={styles.btn} component={NavLink} to="syllabus">
            Syllabus
          </Button>
          <Button className={styles.btn} component={NavLink} to="media">
            Media
          </Button>
          <Button className={styles.btn} component={NavLink} to="contents">
            Contents
          </Button>
          <Button
            className={styles.btn}
            component={NavLink}
            to="resource-library"
          >
            Resource Library
          </Button>
        </Box>

        <Box sx={{ flexShrink: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </CardActions>

      <Card>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </section>
  );
};

export default LearningHubLayout;
