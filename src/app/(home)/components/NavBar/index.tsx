"use client";
import React, { useMemo } from "react";
import { Box } from "@mui/system";
import { useRouter, usePathname } from "next/navigation";
import { useWindowSize } from "@/app/hooks/useWindowSize";
import Link from "next/link";
import { NAV_MENU } from "./navbar.constants";
import Image from "next/image";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { MenuDialog } from "../MenuDialog";

export default function NavBar() {
  const router = useRouter();
  const path = usePathname();
  const windowSize = useWindowSize();
  const navBarItems = useMemo(() => Object.values(NAV_MENU), []);
  const width = useMemo(() => {
    return windowSize;
  }, [windowSize]);
  const redirectToHome = (route: string) => {
    if (path !== "/") {
      router.push("/" + route);
    }
  };

  return (
    <Box
      className={
        `${path == "/" ? "!bg-transparent " : "!bg-[#000000] "}` +
        "flex justify-center bg-transparent w-full p-4 text-white z-10 static lg:absolute top-0 left-0"
      }
    >
      <Box
        className={
          "w-full flex items-center justify-between transition-colors ease-in-out duration-200 max-w-[1320px]"
        }
      >
        <Box>
          <Link href={"/"}>
            <Image
              src={"/images/logo.webp"}
              alt={"store logo"}
              width={80}
              loading={"eager"}
              className={"visible"}
              height={30}
              style={{ visibility: "visible" }}
            />
          </Link>
        </Box>
        {width! > 970 && (
          <Box>
            <List
              component={"nav"}
              className={"flex flex-1 items-center justify-between"}
            >
              {navBarItems.map(({ name, id, route }, index) => (
                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                  <Link
                    onClick={() => redirectToHome(route)}
                    key={id}
                    className="nav-link"
                    href={route}
                  >
                    <ListItemButton className={"w-max !py-0"}>
                      <ListItemText
                        primary={name}
                        primaryTypographyProps={{ fontWeight: "600" }}
                        className={"itemText"}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        {width! < 970 && <MenuDialog />}
      </Box>
    </Box>
  );
}
