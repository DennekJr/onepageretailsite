import { Box } from "@mui/system";
import { Heading } from "@/app/components/SectionsContainer";
import "./contact.styles.css";
import React from "react";
import { ContactForm } from "./Form/index";

export const Contact = () => {
  return (
    <section className={"contactUs"}>
      <Box className={"contactContainer text-center"}>
        <Heading
          title={"Get"}
          blueTitle={"In Touch"}
          whiteTitle={"text-[#ffffff]"}
          body={
            "Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took\n" +
            "a galley of type and scrambled it to make a type specimen book It has survived not only five centuries."
          }
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
