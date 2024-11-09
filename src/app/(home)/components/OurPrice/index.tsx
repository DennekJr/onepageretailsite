"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { PriceCards } from "./PriceCard";
import "./ourPrice.styles.css";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";
import { PriceCardTypes } from "@/app/(home)/components/OurPrice/PriceCard/priceCard.types";

interface OurPriceData extends ComponentDataBAseType {
  title: string;
  content: string;
  blueTitle: string;
  priceCards: PriceCardTypes[];
}

export const OurPrice = () => {
  const [data, setData] = useState<OurPriceData>();
  useEffect(() => {
    getComponentData("our-price").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <Box className={"w-full px-[15px] mx-auto py-[120px] priceBodyConatiner"}>
      <Heading
        title={data.title}
        blueTitle={data.blueTitle}
        body={data.content}
      />
      <PriceCards priceCards={data.priceCards} />
    </Box>
  );
};
