import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Landing/Login";
import Register from "../pages/Landing/Register";
import ForgotPassword from "../pages/Landing/Forgot-Password";
import About from "../pages/About";
import LearningHub from "../pages/LearningHub";
import Assessment from "../pages/Assessment";
import ProgressTracker from "../pages/ProgressTracker";
import Profile from "../pages/Profile";
import Error from "../pages/Error";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="learning-hub" element={<LearningHub />}>
          {/* <Route path="syllabus" element={<Syllabus />} />
          <Route path="media" element={<Media />} />
          <Route path="contents" element={<Contents />} />
          <Route path="resource-library" element={<ResourceLibrary />} /> */}
        </Route>
        <Route path="assessment" element={<Assessment />} />
        <Route path="progress-tracker" element={<ProgressTracker />}>
          {/* <Route path="contents" element={<Contents />} />
          <Route path="assessment" element={<Assessment />} /> */}
        </Route>
        <Route path="profile" element={<Profile />}>
          {/* <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} /> */}
        </Route>
        <Route path="about" element={<About />} />
        <Route path="landing" element={<Landing />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Route>

      <Route path="*" element={<Error />} />
    </>
  )
);

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
    sublinks: [
      {
        name: "Settings",
        href: "settings",
      },
      {
        name: "Logout",
        href: "logout",
      },
    ],
  },
  {
    name: "Join Us",
    href: "landing",
  },
];
