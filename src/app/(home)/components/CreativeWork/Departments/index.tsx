"use client";
import { Box } from "@mui/system";
import "./departments.styles.css";
import { useMemo, useState } from "react";
import { DEPARTMENTSMENU } from "../Departments/departments.constants";
import { DepartmentGridItem } from "../Departments/DepartmentGridItem";
import { EMPLOYEEMENU } from "../Departments/DepartmentGridItem/departmentGridItem.constants";

export const Departments = () => {
  const [filter, setFilter] = useState("*");
  const departments = useMemo(() => Object.values(DEPARTMENTSMENU), [filter]);
  const employees = useMemo(() => {
    if (filter === "*") {
      return Object.values(EMPLOYEEMENU);
    }
    return Object.values(EMPLOYEEMENU).filter((item) =>
      item.filterGroup.includes(filter),
    );
  }, [filter]);
  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <Box className={"container"}>
      <Box className="departmentBarRow">
        <Box className={"col"}>
          <div className={"navGroup !text-center m-auto"}>
            {departments.map((department, index) => (
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
        {employees.map((employee, index) => (
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
