import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import "./aboutUs.styles.css";

export const AboutUs = () => {
  return (
    <Box className={"py-[120px]"}>
      <Box className={"container"}>
        <Box className={"aboutUsRow !items-center"}>
          <Box className={"imageContainer"}>
            <Box className={"aboutImage"}>
              <Image
                alt={"about us"}
                className={"imgFluid"}
                src={"/images/departmentImage.webp"}
                width={423}
                height={534}
              />
            </Box>
          </Box>
          <Box className={"counterArea"}>
            <div className="sectionHeading px-[15px]">
              <h2 className="wow fadeInUp text-[1.5em]">About us</h2>
              <p className="wow fadeInUp">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&amp;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using &amp;Content
                here, content here&amp;, making it look like readable English.
              </p>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
