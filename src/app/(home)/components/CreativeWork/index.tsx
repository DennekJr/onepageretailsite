import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { Departments } from "../../components/CreativeWork/Departments";

export const CreativeWork = () => {
  return (
    <Box
      className={
        "container w-full px-[15px] mx-auto min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
      }
    >
      <Heading
        title={"Creative"}
        blueTitle={"Work"}
        body={
          "Lorem Ipsum is simply dummy text of the printing and type setting industry\n\n" +
          "        a galley of type and scrambled it to make a type specimen book It has survived\n" +
          "        not only five centuries."
        }
      />
      <Departments />
    </Box>
  );
};
