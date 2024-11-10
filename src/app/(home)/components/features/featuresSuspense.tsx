import { Box } from "@mui/system";
import React from "react";
import { Skeleton } from "@mui/material";

export const FeaturesSuspense = () => {
  return (
    <section className={"py-[120px] bg-[#f8f8f8]"}>
      <Box
        className={
          "container w-full px-[15px] mx-auto min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
        }
      >
        <Box className={"!text-center wow fadeIn mb-[60px] text-black"}>
          <Box className={"text-[30px] font-bold text-[#313e4b] mb-[10px] "}>
            <Skeleton className={"!text-[#02a2c4]"}></Skeleton>
          </Box>
          <Skeleton
            className={
              "line text-center w-[1px] h-[50px] inline-block mt-[10px] mb-[20px] "
            }
          ></Skeleton>
          <Skeleton
            className={"text-[#727f8c] m-0 text-[16px] font-medium"}
          ></Skeleton>
        </Box>
        <Box className={"row flex flex-wrap mx-[-15px]"}>
          {Array.from({ length: 3 }, (_, i) => i + 1).map((index) => (
            <Box
              key={index}
              className="col-lg-4 min-[992px]:flex-[0_0_33.33%] min-[992px]:max-w-[33.33%] w-full relative px-[15px] text-black"
            >
              <Box
                className="feature-block wow fadeInUp mb-[40px]"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <Box className="innerBox relative px-[20px] pt-[35px] pb-[30px] shadow-[0px_2px_8px_rgba(0,0,0,.1)] bg-white">
                  <Skeleton className={"iconComponent"} />
                  <Skeleton
                    className={
                      "relative pl-[60px] text-[20px] font-bold text-[#1c1c1c] mb-[20px] text-left"
                    }
                  ></Skeleton>
                  <Skeleton className="text text-[#4d4d4d] block text-[15px] font-semibold"></Skeleton>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};
