import "./footer.styles.css";
import Image from "next/image";
import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <footer className={"footerContainer"}>
      <Box className="container text-center text-white flex flex-col items-center">
        <Image
          width={154}
          height={38}
          src="/images/logo.webp"
          alt="Footer logo"
        />
        <h2>Copyright © 2019 sbtechnosoft. All Rights Reserved.</h2>
      </Box>
    </footer>
  );
};
