// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useRoutes } from "react-router";
import {
  MantineProvider,
  Button,
  Title,
  Group,
  LoadingOverlay,
} from "@mantine/core";
import LandingLayout from "./Components/Layouts/LandingLayout";
// import Home from "./pages/Home/Home";
// import Experience from "./pages/Experience/Experience";
// import Education from "./pages/Education/Education";
// import Projects from "./pages/Projects/Projects";
// import Contact from "./pages/Contact/Contact";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
import routes from "./routes/route";
import "./App.css";

const App = () => {
  const routeElement = useRoutes(routes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false), 500000);
  }, []);

  return (
    <MantineProvider>
      {loading ? (
        <LoadingOverlay visible={loading} />
      ) : (
        <LandingLayout>{routeElement}</LandingLayout>
      )}
    </MantineProvider>
  );
};

export default App;
