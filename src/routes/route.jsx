// import BasicLayout from "../Components/Layouts/BasicLayout";
import Home from "../pages/Home/Home";
import Education from "../pages/Education/Education";
import Experience from "../pages/Experience/Experience";
import Project from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

export default [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
