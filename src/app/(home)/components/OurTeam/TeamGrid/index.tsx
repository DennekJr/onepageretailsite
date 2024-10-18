import { Box } from "@mui/system";
import { useMemo } from "react";
import { TEAMGRIDMENU } from "./teamGrid.constants";
import Image from "next/image";
import { Facebook, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import "./teamGrid.styles.css";

export const TeamGrid = () => {
  const team = useMemo(() => Object.values(TEAMGRIDMENU), []);
  return (
    <Box className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
      {team.map((teamMember, index) => {
        return (
          <Box key={index} className={"teamBlock"}>
            <Box className={"teamBox"}>
              <Box className={"innerBox"}>
                <Box className={"imageBox"}>
                  <figure>
                    <Image
                      height={256}
                      width={256}
                      src={teamMember.src}
                      alt={teamMember.name}
                    />
                  </figure>
                  <div className="infoBox">
                    <h4 className="name">
                      <a href="#">{teamMember.name}</a>
                    </h4>
                    <span className="designation">
                      {teamMember.designation}
                    </span>
                    <div className="socialLinks">
                      <a href={teamMember.facebook}>
                        <Facebook />
                      </a>{" "}
                      <a href={teamMember.twitter}>
                        <Twitter />
                      </a>{" "}
                      <a href={teamMember.pinterest}>
                        <Pinterest />
                      </a>{" "}
                      <a href={teamMember.linkedin}>
                        <LinkedIn />
                      </a>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
