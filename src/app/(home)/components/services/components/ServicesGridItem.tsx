import { Box } from "@mui/system";
import { ServicesGridTypes } from "@/app/(home)/components/services/services.types";
import { Typography } from "@mui/material";
import "./serviceGridItem.css";

export const ServicesGridItem = ({ item }: { item: ServicesGridTypes }) => {
  return (
    <Box className="group col-lg-4 col-md-6 min-[992px]:flex-[0_0_33.33%] min-[992px]:max-w-[33.33%] min-[768px]:flex-[0_0_50%] min-[768px]:max-w-[50%] w-full relative px-[15px] text-black hover:text-[#fff]]">
      <Box
        className="single-service hover:bg-[#02a2c4] bg-[#f8f8f8] py-[60px] px-[40px] mt-[40px]"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <Box
          className={
            "services-icon mb-[25px] w-[70px] h-[70px] rounded-full bg-[#02a2c4] group-hover:bg-[#fff] flex items-center justify-center"
          }
        >
          <item.icon />
        </Box>
        <Box className={"service-content"}>
          <h5 className={"text-[20px] mb-[10px]"}>{item.title}</h5>
          <Typography className={"content mt-0 mb-1"}>{item.body}</Typography>
          <a href={item.readMoreHref}>Read More</a>
        </Box>
      </Box>
    </Box>
  );
};
