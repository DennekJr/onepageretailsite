"use client";
import { Box } from "@mui/system";
import { Heading } from "@/app/components/SectionsContainer";
import { useEffect, useState } from "react";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";
import { ServicesGridItem } from "@/app/(home)/components/services/components/ServicesGridItem";

interface ServicesType extends ComponentDataBAseType {
  title: string;
  blueTitle: string;
  content: string;
  services: {
    title: string;
    content: string;
    icon: string;
    readMoreHref: string;
  }[];
}

const Services = () => {
  const [data, setData] = useState<ServicesType>();
  useEffect(() => {
    getComponentData("our-service").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <section className={"py-[120px] bg-[#fff]"}>
      <Box
        className={
          "min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto"
        }
      >
        <Heading
          title={data.title}
          blueTitle={data.blueTitle}
          body={data.content}
        />
        <Box className={"row flex flex-wrap mx-[-15px]"}>
          {data.services.map((featureItem, index) => (
            <ServicesGridItem key={index} item={featureItem} />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Services;
