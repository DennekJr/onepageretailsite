"use client";
import { Box } from "@mui/system";
import { Heading } from "../../../components/SectionsContainer";
import { Departments } from "../../components/CreativeWork/Departments";
import { useEffect, useState } from "react";
import { ComponentDataBAseType, getComponentData } from "@/app/(home)/utils";
import { DepartmentGridItemTypes } from "@/app/(home)/components/CreativeWork/Departments/DepartmentGridItem/departmentGridItem.types";

interface CreativeWorkData extends ComponentDataBAseType {
  departments: { id: string; name: string; filter: string }[];
  employees: DepartmentGridItemTypes[];
  title: string;
  blueTitle: string;
  content: string;
}

export const CreativeWork = () => {
  const [data, setData] = useState<CreativeWorkData>();
  useEffect(() => {
    getComponentData("creative-work").then((componentData) => {
      console.log(componentData.data);
      setData(componentData.data);
    });
  }, []);
  if (data === undefined) return;
  return (
    <Box
      className={
        "container w-full px-[15px] mx-auto min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
      }
    >
      <Heading
        title={data.title}
        blueTitle={data.blueTitle}
        body={data.content}
      />
      <Departments employees={data.employees} departments={data.departments} />
    </Box>
  );
};
