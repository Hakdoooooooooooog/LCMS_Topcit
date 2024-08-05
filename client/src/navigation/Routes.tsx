import { lazy, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoadingScreen from "../components/ui/LoadingScreen/LoadingScreen";

const Content = lazy(() => import("../pages/LearningHub/Content"));
const Main = lazy(() => import("../pages/LearningHub/Main"));
const LearningHubLayout = lazy(() => import("../layouts/LearningHubLayout"));
const Syllabus = lazy(() => import("../pages/LearningHub/Syllabus"));
const Media = lazy(() => import("../pages/LearningHub/Media"));
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

const Navigation = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="learning-hub" element={<LearningHubLayout />}>
          <Route index element={<Main />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="syllabus/:contentID" element={<Content />} />
          <Route path="media" element={<Media />} />
        </Route>
        <Route path="assessment" element={<Assessment />} />
        <Route path="progress-tracker" element={<ProgressTracker />} />
        <Route path="profile" element={<Profile />} />
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

export default function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={Navigation} />
    </Suspense>
  );
}
