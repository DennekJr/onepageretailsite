"use client";
import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { TeamGrid } from "./TeamGrid";
import { useEffect, useState } from "react";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";
import { TeamGridTypes } from "@/app/(home)/components/OurTeam/TeamGrid/teamGrid.types";

interface OurTeamData extends ComponentDataBAseType {
  title: string;
  content: string;
  blueTitle: string;
  teamMembers: TeamGridTypes[];
}

export const OurTeam = () => {
  const [data, setData] = useState<OurTeamData>();
  useEffect(() => {
    getComponentData("our-team").then((componentData) => {
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <Box
      className={
        "min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] pt-[120px] w-full px-[15px] mx-auto"
      }
    >
      <Heading
        title={data.title}
        blueTitle={data.blueTitle}
        body={data.content}
      />
      <TeamGrid team={data.teamMembers} />
    </Box>
  );
};
