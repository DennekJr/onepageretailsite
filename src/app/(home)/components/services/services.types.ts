import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export type ServicesGridTypes = {
  id: string;
  title: string;
  body: string;
  readMoreHref: string;
  icon: OverridableComponent<SvgIconTypeMap>;
};
