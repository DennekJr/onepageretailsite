import { NavBarItem } from "./navbar.types";

export const NAV_MENU: Record<string, NavBarItem> = {
  home: {
    id: "home",
    route: "/",
    name: "Home",
    disabled: false,
  },
  services: {
    id: "services",
    route: "#services",
    name: "Services",
    disabled: false,
  },
  portfolio: {
    id: "portfolio",
    route: "portfolio",
    name: "Portfolio",
    disabled: false,
  },
  team: {
    id: "team",
    route: "#team",
    name: "Team",
    disabled: false,
  },
  price: {
    id: "price",
    route: "#price",
    name: "Price",
    disabled: false,
  },
  blog: {
    id: "blog",
    route: "#blog",
    name: "Blog",
    disabled: false,
  },
  contact: {
    id: "contact",
    route: "#contact",
    name: "Contact",
    disabled: false,
  },
};
