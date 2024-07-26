import { lazy, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoadingScreen from "../components/ui/LoadingScreen";
import LearningHubLayout from "../layouts/LearningHubLayout";
import Syllabus from "../pages/LearningHub/Syllabus";
import Media from "../pages/LearningHub/Media";

const Home = lazy(() => import("../pages/Home"));
const Landing = lazy(() => import("../pages/Landing"));
const RootLayout = lazy(() => import("../layouts/RootLayout"));
const Login = lazy(() => import("../pages/Landing/Login"));
const Register = lazy(() => import("../pages/Landing/Register"));
const ForgotPassword = lazy(() => import("../pages/Landing/Forgot-Password"));
const About = lazy(() => import("../pages/About"));
const Assessment = lazy(() => import("../pages/Assessment"));
const ProgressTracker = lazy(() => import("../pages/ProgressTracker"));
const Profile = lazy(() => import("../pages/Profile"));
const Error = lazy(() => import("../pages/Error"));

export default function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={Navigation} />
    </Suspense>
  );
}

const Navigation = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="learning-hub" element={<LearningHubLayout />}>
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="media" element={<Media />} />
          {/* <Route path="contents" element={<Contents />} />
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
