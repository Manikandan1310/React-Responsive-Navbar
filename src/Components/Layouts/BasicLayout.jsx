import React from "react";
import { AppShell } from "@mantine/core";

const BasicLayout = ({ children }) => (
  <AppShell padding="md">{children}</AppShell>
);

export default BasicLayout;
