import { Box } from "@mui/material";
import { PRICECARDMENU } from "./priceCard.constants";
import { useMemo } from "react";
import "./priceCard.styles.css";

export const PriceCards = () => {
  const cards = useMemo(() => Object.values(PRICECARDMENU), []);
  return (
    <Box className={"row"}>
      {cards.map((card, index) => (
        <Box key={index} className={"itemContainer"}>
          <Box className={"card"}>
            <Box className={"front"}>
              <h3>{card.planType}</h3>
              <h2>{card.cost}</h2>
              <p>{card.shortDescription}</p>
              <ul>
                {card.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <a href="#0" className="button">
                Get Started
              </a>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
