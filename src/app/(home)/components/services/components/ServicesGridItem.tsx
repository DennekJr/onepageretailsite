import { Box } from "@mui/system";
import "./serviceGridItem.styles.css";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";
import * as Icons from "@mui/icons-material";

export const ServicesGridItem = ({
  item,
}: {
  item: { title: string; content: string; icon: string; readMoreHref: string };
}) => {
  const iconMap = { ...Icons };
  const IconComponent: OverridableComponent<SvgIconTypeMap> = (
    iconMap as Record<string, OverridableComponent<SvgIconTypeMap>>
  )[item.icon];
  return (
    <Box className="serviceItem text-black hover:text-[#fff]]">
      <Box
        className="singleService hover:bg-[#02a2c4] bg-[#f8f8f8]"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <Box
          className={
            "services-icon mb-[25px] w-[70px] h-[70px] rounded-full bg-[#02a2c4] group-hover:bg-[#fff] flex items-center justify-center"
          }
        >
          <IconComponent />
        </Box>
        <Box className={"service-content"}>
          <h5 className={"text-[20px] mb-[10px]"}>{item.title}</h5>
          <p className={"mt-0 mb-4"}>{item.content}</p>
          <a href={item.readMoreHref}>Read More</a>
        </Box>
      </Box>
    </Box>
  );
};
