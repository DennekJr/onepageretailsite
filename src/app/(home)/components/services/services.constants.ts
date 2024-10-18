import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { ServicesGridTypes } from "@/app/(home)/components/services/services.types";

export const SERVICESGRIDMENU: Record<string, ServicesGridTypes> = {
  one: {
    id: "multipurpose",
    title: "Multipurpose",
    readMoreHref: "/",
    body:
      "Lorem Ipsum is simply dummy text of the printing and\n" +
      "                  typesetting industry. printing and typesetting.",
    icon: InsertDriveFileIcon,
  },
  two: {
    id: "responsive",
    title: "Responsive",
    readMoreHref: "/",
    body:
      "Lorem Ipsum is simply dummy text of the printing and\n" +
      "                  typesetting industry. printing and typesetting.",
    icon: InsertDriveFileIcon,
  },
  three: {
    id: "features",
    title: "Features",
    readMoreHref: "/",
    body:
      "Lorem Ipsum is simply dummy text of the printing and\n" +
      "                  typesetting industry. printing and typesetting.",
    icon: InsertDriveFileIcon,
  },
};
