import { Box } from "@mui/system";
import Image from "next/image";
import { Facebook, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import "./teamGrid.styles.css";
import { TeamGridTypes } from "@/app/(home)/components/OurTeam/TeamGrid/teamGrid.types";

export const TeamGrid = ({ team }: { team: TeamGridTypes[] }) => {
  return (
    <Box className={"row"}>
      {team.map((teamMember, index) => {
        return (
          <Box key={index} className={"teamBlock"}>
            <Box className={"teamBox"}>
              <Box className={"teamInnerBox"}>
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
                      </a>
                      <a href={teamMember.twitter}>
                        <Twitter />
                      </a>
                      <a href={teamMember.pinterest}>
                        <Pinterest />
                      </a>
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
