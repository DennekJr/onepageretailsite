import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
import React from "react";

export const ServicesSuspense = () => {
  return (
    <section className={"py-[120px] bg-[#fff]"}>
      <Box
        className={
          "min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto"
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
          {Array.from({ length: 6 }, (_, i) => i + 1).map((index) => (
            <Box
              key={index}
              className="serviceItem text-black hover:text-[#fff]]"
            >
              <Box
                className="singleService hover:bg-[#02a2c4] bg-[#f8f8f8]"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <Skeleton
                  className={
                    "services-icon mb-[25px] w-[70px] h-[70px] rounded-full bg-[#02a2c4] group-hover:bg-[#fff] flex items-center justify-center"
                  }
                ></Skeleton>
                <Box className={"service-content"}>
                  <Skeleton className={"text-[20px] mb-[10px]"}></Skeleton>
                  <Skeleton className={"mt-0 mb-4"}></Skeleton>
                  <Skeleton></Skeleton>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};
