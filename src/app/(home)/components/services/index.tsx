import { Box } from "@mui/system";
import { Heading } from "@/app/components/SectionsContainer";
import { useMemo } from "react";
import { SERVICESGRIDMENU } from "@/app/(home)/components/services/services.constants";
import { ServicesGridItem } from "@/app/(home)/components/services/components/ServicesGridItem";

const Services = () => {
  const offeredServices = useMemo(() => Object.values(SERVICESGRIDMENU), []);
  return (
    <section className={"py-[120px] bg-[#fff]"}>
      <Box
        className={
          "min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto"
        }
      >
        <Heading
          title={"Our "}
          blueTitle={"Services"}
          body={
            "Lorem Ipsum is simply dummy text of the printing and type setting industry\n\n" +
            "        a galley of type and scrambled it to make a type specimen book It has survived\n" +
            "        not only five centuries."
          }
        />
        <Box className={"row flex flex-wrap mx-[-15px]"}>
          {offeredServices.map((featureItem, index) => (
            <ServicesGridItem key={index} item={featureItem} />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Services;
