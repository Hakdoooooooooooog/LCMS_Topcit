import { styled, alpha } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { IFormFieldInputProps } from "../components/ui/FormInputs/FormInputField";

// Search bar styles

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

// Navigation links
export const homeRoutes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Learning Hub",
    href: "learning-hub",
    sublinks: [
      {
        name: "Syllabus",
        href: "syllabus",
      },
      {
        name: "Media",
        href: "media",
      },
      {
        name: "Contents",
        href: "contents",
      },
      {
        name: "Resource Library",
        href: "resource-library",
      },
    ],
  },
  {
    name: "Assessment",
    href: "assessment",
  },
  {
    name: "Progress Tracker",
    href: "progress-tracker",
    sublinks: [
      {
        name: "Contents",
        href: "contents",
      },
      {
        name: "Assessment",
        href: "assessment",
      },
    ],
  },
  {
    name: "Profile",
    href: "profile",
  },
  {
    name: "Join Us",
    href: "landing",
  },
];

// islanding page links
export const path = [
  "/landing",
  "/landing/register",
  "/landing/forgot-password",
];

// Fields for the user form
export const setLoginFields: Array<IFormFieldInputProps> = [
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
    value: "",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    value: "",
  },
];

export const setRegisterFields: Array<IFormFieldInputProps> = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    name: "firstName",
    value: "",
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    name: "lastName",
    value: "",
  },
  {
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    name: "userName",
    value: "",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    name: "email",
    value: "",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    value: "",
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    name: "confirmPassword",
    value: "",
  },
];
