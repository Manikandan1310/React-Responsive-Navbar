import {
  Anchor,
  AppShell,
  Avatar,
  Button,
  createStyles,
  Divider,
  Group,
  Menu,
  Navbar,
  Text,
} from "@mantine/core";
import { useContext, useState } from "react";
import FooterLinks from "../Footer/SingleFooter";
import TopNav from "../Header/Header";

function LandingLayout({ children }) {
  //   const { children } = props;
  const [opened, setOpened] = useState(false);

  const useStyles = createStyles((theme) => ({
    navbar: {
      [theme.fn.largerThan("md")]: {
        display: "none",
      },

      textAlign: "center",
    },
  }));

  const { classes } = useStyles();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      header={<TopNav />}
      // footer={<FooterLinks />}
      styles={(theme) => ({
        root: {
          minHeight: "100vh",
        },
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : "white",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.gray[1]
              : theme.colors.gray[8],
          padding: "0 !important",
          overflowX: "hidden",
          minHeight: "calc(100vh - 249px)",
        },
      })}
    >
      {children}
    </AppShell>
  );
}

export default LandingLayout;
