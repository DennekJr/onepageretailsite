"use client";
import { Box } from "@mui/system";
import "./hero.styles.css";
import { useEffect, useState } from "react";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";

interface HeroData extends ComponentDataBAseType {
  title: string;
  subtitle: string;
  subtitle2: string;
}

export const Hero = () => {
  const [data, setData] = useState<HeroData>();
  useEffect(() => {
    getComponentData("hero").then((componentData) => {
      console.log("hero", componentData);
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <section
      className={"bg-[#232834] slider text-center d-flex align-items-center"}
    >
      <Box className="heroContainer text-white">
        <div className="heroContent">
          <span className={"text-[#02a2c4]"}>{data.title}</span>
          <h1>{data.subtitle}</h1>
          <p>{data.subtitle2}. </p>
          <a
            href="https://themeforest.net/user/sbtechnosoft/portfolio"
            className="btn-color"
          >
            Buy Now
          </a>
        </div>
      </Box>
    </section>
  );
};
