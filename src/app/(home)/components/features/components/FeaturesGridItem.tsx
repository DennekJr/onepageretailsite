import { Box } from "@mui/system";
import "../feature.styles.css";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";
import * as Icons from "@mui/icons-material";

export const FeaturesGridItem = ({
  item,
}: {
  item: {
    title: string;
    content: string;
    icon: string;
  };
}) => {
  const iconMap = { ...Icons };
  const IconComponent: OverridableComponent<SvgIconTypeMap> =
    iconMap[`${item.icon}`];
  return (
    <Box className="col-lg-4 min-[992px]:flex-[0_0_33.33%] min-[992px]:max-w-[33.33%] w-full relative px-[15px] text-black">
      <Box
        className="feature-block wow fadeInUp mb-[40px]"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <Box className="innerBox relative px-[20px] pt-[35px] pb-[30px] shadow-[0px_2px_8px_rgba(0,0,0,.1)] bg-white">
          <IconComponent className={"iconComponent"} />
          <h3
            className={
              "relative pl-[60px] text-[20px] font-bold text-[#1c1c1c] mb-[20px] text-left"
            }
          >
            {item.title}
          </h3>
          <div className="text text-[#4d4d4d] block text-[15px] font-semibold">
            {item.content}
          </div>
        </Box>
      </Box>
    </Box>
  );
};
