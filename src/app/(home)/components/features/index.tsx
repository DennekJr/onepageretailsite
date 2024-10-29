"use client";
import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { useEffect, useState } from "react";
import { FeaturesGridItem } from "../../components/features/components/FeaturesGridItem";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";

interface FeaturesData extends ComponentDataBAseType {
  title: string;
  subtitle: string;
  blueTitle: string;
  featureBlocks: {
    title: string;
    content: string;
    icon: string;
  }[];
}

export const Features = () => {
  const [data, setData] = useState<FeaturesData>();
  useEffect(() => {
    getComponentData("feature").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <section className={"py-[120px] bg-[#f8f8f8]"}>
      <Box
        className={
          "container w-full px-[15px] mx-auto min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
        }
      >
        <Heading
          title={data.title}
          blueTitle={data.blueTitle}
          body={data.subtitle}
        />
        <Box className={"row flex flex-wrap mx-[-15px]"}>
          {data.featureBlocks.map((featureItem, index) => (
            <FeaturesGridItem key={index} item={featureItem} />
          ))}
        </Box>
      </Box>
    </section>
  );
};
