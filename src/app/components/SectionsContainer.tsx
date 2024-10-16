import { Box } from "@mui/system";
import React from "react";

export const Heading = ({
  title,
  blueTitle,
  body,
}: {
  title: string;
  blueTitle: string;
  body: string;
}) => {
  return (
    <Box className={"!text-center wow fadeIn mb-[60px] text-black"}>
      <h2 className={"text-[30px] font-bold text-[#313e4b] mb-[10px]"}>
        {title} <span className={"text-[#02a2c4]"}>{blueTitle}</span>
      </h2>
      <span
        className={
          "line text-center w-[1px] h-[50px] inline-block bg-[#353c4d] mt-[10px] mb-[20px]"
        }
      ></span>
      <p className={"text-[#727f8c] m-0 text-[16px] font-medium"}>{body}</p>
    </Box>
  );
};
