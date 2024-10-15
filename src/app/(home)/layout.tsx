import React from "react";
import {Box} from "@mui/system";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}
