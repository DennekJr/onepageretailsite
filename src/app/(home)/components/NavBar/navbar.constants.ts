import { NavBarItem } from "./navbar.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  exhibitors: {
    id: "exhibitors",
    route: "exhibit",
    name: "Exhibitors",
    icon: ExpandMoreIcon,
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

export const NAV_BUTTONS: Record<string, NavBarItem> = {
  getTicket: {
    id: "getTicket",
    route: "ticket",
    name: "Get Ticket",
    disabled: false,
  },
  becomeASponsor: {
    id: "becomeASponsor",
    route: "sponsor",
    name: "Become A Sponsor",
    disabled: false,
  },
};
