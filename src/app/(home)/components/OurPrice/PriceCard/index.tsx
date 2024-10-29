import { Box } from "@mui/material";
import "./priceCard.styles.css";
import { PriceCardTypes } from "@/app/(home)/components/OurPrice/PriceCard/priceCard.types";

export const PriceCards = ({
  priceCards,
}: {
  priceCards: PriceCardTypes[];
}) => {
  return (
    <Box className={"row"}>
      {priceCards.map((card, index) => (
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
