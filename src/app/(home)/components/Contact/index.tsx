"use client";
import { Box } from "@mui/system";
import { Heading } from "@/app/components/SectionsContainer";
import "./contact.styles.css";
import React, { useEffect, useState } from "react";
import { ContactForm } from "./Form/index";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";

interface ContactData extends ComponentDataBAseType {
  title: string;
  content: string;
  blueTitle: string;
}

export const Contact = () => {
  const [data, setData] = useState<ContactData>();
  useEffect(() => {
    getComponentData("get-in-touch").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <section className={"contactUs"}>
      <Box className={"contactContainer text-center"}>
        <Heading
          title={data.title}
          blueTitle={data.blueTitle}
          whiteTitle={"text-[#ffffff]"}
          body={data.content}
        />
        <Box className={"contactRow"}>
          <Box className={"contactFormContainer"}>
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </section>
  );
};
