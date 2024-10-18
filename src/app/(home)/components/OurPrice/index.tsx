import React from "react";
import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { PriceCards } from "./PriceCard";
import "./ourPrice.styles.css";

export const OurPrice = () => {
  return (
    <Box className={"w-full px-[15px] mx-auto py-[120px] priceBodyConatiner"}>
      <Heading
        title={"Our"}
        blueTitle={"Price"}
        body={
          "Lorem Ipsum is simply dummy text of the printing and typesetting\n" +
          "            industry. Lorem Ipsum has been the industrys standard dummy text\n" +
          "            ever since the 1500s, when an unknown printer took a galley of type\n" +
          "            and scrambled it to make a type specimen book"
        }
      />
      <PriceCards />
    </Box>
  );
};
