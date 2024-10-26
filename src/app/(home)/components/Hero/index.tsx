import { Box } from "@mui/system";
import "./hero.styles.css";

export const Hero = () => {
  return (
    <section
      className={"bg-[#232834] slider text-center d-flex align-items-center"}
    >
      <Box className="heroContainer text-white">
        <div className="heroContent">
          <span>Welcome to</span>
          <h1>Best Website Development Company</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <a
            href="https://themeforest.net/user/sbtechnosoft/portfolio"
            className="btn-color"
          >
            Buy Now
          </a>
        </div>
      </Box>
    </section>
  );
};
