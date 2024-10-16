import { Box } from "@mui/system";
import { Heading } from "@/app/components/SectionsContainer";
import { TeamGrid } from "@/app/(home)/components/OurTeam/TeamGrid";

export const OurTeam = () => {
  return (
    <Box
      className={
        "min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] pt-[120px] w-full px-[15px] mx-auto"
      }
    >
      {" "}
      <Heading
        title={"Our"}
        blueTitle={"Team"}
        body={
          "Lorem Ipsum is simply dummy text of the printing and type setting industry\n" +
          "        when an unknown printer took "
        }
      />
      <TeamGrid />
    </Box>
  );
};
