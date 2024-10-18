import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { useMemo } from "react";
import { FEATURESGRIDMENU } from "../../components/features/features.constants";
import { FeaturesGridItem } from "../../components/features/components/FeaturesGridItem";

export const Features = () => {
  const features = useMemo(() => Object.values(FEATURESGRIDMENU), []);
  return (
    <section className={"py-[120px] bg-[#f8f8f8]"}>
      <Box
        className={
          "container w-full px-[15px] mx-auto min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
        }
      >
        <Heading
          title={"Features Our"}
          blueTitle={"Probox"}
          body={
            "Lorem Ipsum is simply dummy text of the printing and typesetting\n" +
            "            industry. Lorem Ipsum has been the industrys standard dummy text\n" +
            "            ever since the 1500s, when an unknown printer took a galley of type\n" +
            "            and scrambled it to make a type specimen book"
          }
        />
        <Box className={"row flex flex-wrap mx-[-15px]"}>
          {features.map((featureItem, index) => (
            <FeaturesGridItem key={index} item={featureItem} />
          ))}
        </Box>
      </Box>
    </section>
  );
};
