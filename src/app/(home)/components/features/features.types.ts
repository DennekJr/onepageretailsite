import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export type FeaturesGridTypes = {
  id: string;
  title: string;
  body: string;
  icon: OverridableComponent<SvgIconTypeMap>;
};
