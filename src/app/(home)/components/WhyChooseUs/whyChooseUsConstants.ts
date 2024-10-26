import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export const WHYCHOOSEUSCONSTANTS: Record<
  string,
  {
    id: string;
    reason: string;
    icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  }
> = {
  one: {
    id: "reason1",
    reason: "Responsive",
  },
  two: {
    id: "reason2",
    reason: "Responsive",
  },
  three: {
    id: "reason3",
    reason: "Responsive",
  },
  four: {
    id: "reason4",
    reason: "Responsive",
  },
  five: {
    id: "reason5",
    reason: "Responsive",
  },
  six: {
    id: "reason6ß",
    reason: "Responsive",
  },
};
