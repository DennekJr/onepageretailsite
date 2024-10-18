import { Box } from "@mui/system";

export const Hero = () => {
  return (
    <section
      className={
        "slider before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:text-center before:-z-10 text-center d-flex align-items-center"
      }
    >
    
      <Box className="container text-white">
        <div className="content">
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
