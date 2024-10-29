"use client";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./aboutUs.styles.css";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";

interface AboutUsData extends ComponentDataBAseType {
  title: string;
  firstparagraph: string;
  secondparagragh: string;
  image: object;
}

export const AboutUs = () => {
  const [data, setData] = useState<AboutUsData>();
  useEffect(() => {
    getComponentData("about?populate=*").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <Box className={"py-[120px]"}>
      <Box className={"container"}>
        <Box className={"aboutUsRow !items-center"}>
          <Box className={"imageContainer"}>
            <Box className={"aboutImage"}>
              <Image
                alt={"about us"}
                className={"imgFluid"}
                src={"/images/about-img.webp"}
                width={423}
                height={534}
              />
            </Box>
          </Box>
          <Box className={"counterArea"}>
            <div className="sectionHeading">
              <h2 className="wow fadeInUp text-[1.5em]">{data.title}</h2>
              <p className="wow fadeInUp">{data.firstparagraph}</p>
              <p>{data.secondparagragh}</p>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
