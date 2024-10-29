"use client";
import "./whyChooseUs.styles.css";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";
import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";
import * as Icons from "@mui/icons-material";

interface WhyChooseUsData extends ComponentDataBAseType {
  title: string;
  subtitle: string;
  content: string;
  image: object;
  reasons: {
    id: string;
    reason: string;
    icon: string;
  }[];
}

export const WhyChooseUs = () => {
  const [data, setData] = useState<WhyChooseUsData>();
  const iconMap = { ...Icons };
  useEffect(() => {
    getComponentData("why-choose-us").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <section className={"block whyUs"}>
      <Box className={"containerFluid"}>
        <Box className={"row"}>
          <Box className={"segment p-0"}>
            <Box className={"left"}></Box>
          </Box>
          <Box className={"segment p-0"}>
            <Box className={"right"}>
              <Box className={"content text-left"}>
                <span className={"text-[#02a2c4]"}>{data.title}</span>
                <h2>{data.subtitle}</h2>
                <p>{data.content}</p>
                <Box className={"row"}>
                  {data.reasons.map((reason, index) => {
                    const IconComponent: OverridableComponent<SvgIconTypeMap> =
                      (
                        iconMap as Record<
                          string,
                          OverridableComponent<SvgIconTypeMap>
                        >
                      )[reason.icon];
                    return (
                      <Box key={index} className={"segment items"}>
                        <Box className={"whyUsBox"}>
                          <Box className={"reasonBox !flex items-center"}>
                            <Box
                              className={
                                "reasonBoxIcon flex items-center justify-center"
                              }
                            >
                              <IconComponent />
                            </Box>
                            <h3 className={"!text-black"}>{reason.reason}</h3>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
