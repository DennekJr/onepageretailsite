import "./whyChooseUs.styles.css";
import { Box } from "@mui/system";
import ScaleIcon from "@mui/icons-material/Scale";
import { useMemo } from "react";
import { WHYCHOOSEUSCONSTANTS } from "@/app/(home)/components/WhyChooseUs/whyChooseUsConstants";

export const WhyChooseUs = () => {
  const reasons = useMemo(() => Object.values(WHYCHOOSEUSCONSTANTS), []);
  return (
    <section className={"block whyUs"}>
      <Box className={"containerFluid"}>
        <Box className={"row"}>
          <Box className={"col-lg-6 p-0"}>
            <Box className={"left"}></Box>
          </Box>
          <Box className={"col-lg-6 p-0"}>
            <Box className={"right"}>
              <Box className={"content"}>
                <span className={"text-black"}>Why choose us?</span>
                <h2>Lorem Ipsum sorem ipsum</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry a galley of type and scrambled it to make a
                  type .
                </p>
                <Box className={"row"}>
                  {reasons.map((reason, index) => {
                    return (
                      <Box key={index} className={"col-lg-6 items"}>
                        <Box className={"whyUsBox"}>
                          <Box className={"reasonBox !flex items-center"}>
                            <Box
                              className={
                                "reasonBoxIcon flex items-center justify-center"
                              }
                            >
                              <ScaleIcon />
                            </Box>
                            <h3 className={"!text-black"}>{reason.reason}</h3>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
