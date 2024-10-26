import { Box } from "@mui/system";
import { ServicesGridTypes } from "@/app/(home)/components/services/services.types";
import "./serviceGridItem.styles.css";

export const ServicesGridItem = ({ item }: { item: ServicesGridTypes }) => {
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
          <item.icon />
        </Box>
        <Box className={"service-content"}>
          <h5 className={"text-[20px] mb-[10px]"}>{item.title}</h5>
          <p className={"mt-0 mb-4"}>{item.body}</p>
          <a href={item.readMoreHref}>Read More</a>
        </Box>
      </Box>
    </Box>
  );
};
