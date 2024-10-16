export const DEPARTMENTSMENU: Record<
  string,
  { id: string; name: string; filter: string }
> = {
  one: {
    id: "all",
    name: "All",
    filter: "*",
  },
  two: {
    id: "marketing",
    name: "Marketing",
    filter: "marketing",
  },
  three: {
    id: "design",
    name: "Design",
    filter: "design",
  },
  four: {
    id: "development",
    name: "Development",
    filter: "development",
  },
};
