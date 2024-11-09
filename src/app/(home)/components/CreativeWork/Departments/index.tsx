"use client";
import { Box } from "@mui/system";
import "./departments.styles.css";
import { useMemo, useState } from "react";
import { DepartmentGridItem } from "../Departments/DepartmentGridItem";
import { DepartmentGridItemTypes } from "@/app/(home)/components/CreativeWork/Departments/DepartmentGridItem/departmentGridItem.types";

export const Departments = ({
  employees,
  departments,
}: {
  departments: { id: string; name: string; filter: string }[];
  employees: DepartmentGridItemTypes[];
}) => {
  const [filter, setFilter] = useState("*");
  const memoizedDepartments = useMemo(() => departments, [filter]);
  const memoizedEmployees = useMemo(() => {
    if (filter === "*") {
      return employees;
    }
    return employees.filter((item) => item.filterGroup.includes(filter));
  }, [filter]);
  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <Box className={"container"}>
      <Box className="departmentBarRow">
        <Box className={"col"}>
          <div className={"departmentsNavGroup !text-center m-auto"}>
            {memoizedDepartments.map((department, index) => (
              <button
                key={index}
                data-filter={department.filter}
                onClick={() => handleFilter(department.filter)}
                className="active"
              >
                {department.name}
              </button>
            ))}
          </div>
        </Box>
      </Box>
      <Box className="departmentsGrid grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {memoizedEmployees.map((employee, index) => (
          <DepartmentGridItem
            key={index}
            src={employee.src}
            filterGroup={employee.filterGroup}
            alt={employee.alt}
            title={employee.title}
            description={employee.description}
          />
        ))}
      </Box>
    </Box>
  );
};
