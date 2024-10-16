import { Box } from "@mui/system";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import { DepartmentGridItemTypes } from "@/app/(home)/components/CreativeWork/Departments/DepartmentGridItem/departmentGridItem.types";
import "./departmentGridItem.styles.css";

export const DepartmentGridItem = ({
  src,
  alt,
  title,
  description,
  filterGroup,
}: DepartmentGridItemTypes) => {
  return (
    <Box className={"itemContainer " + filterGroup}>
      <Box className={"portfolioItem"}>
        <Image alt={alt} src={src} width={267} height={267} />
        <Box className={"overlay text-center"}>
          <Box className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={src}>
              <ArrowRightAltIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
