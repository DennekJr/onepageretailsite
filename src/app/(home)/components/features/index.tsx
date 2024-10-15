import { Box } from "@mui/system";

export const Features = () => {
  return (
    <section className={"py-[120px] bg-[#f8f8f8]"}>
      <Box className={"container w-full py-[15px] mx-auto max-w-[540px]"}>
        <Box
          className="heading !text-center wow fadeIn mb-[60px] text-black"
          style={{ visibility: "visible", animationName: "fadeIn" }}
        >
          <h2 className={"text-[30px] font-bold text-[#313e4b] mb-[10px]"}>
            Features Our <span className={"text-[#02a2c4]"}>Probox</span>
          </h2>
          <span
            className={
              "line text-center w-[1px] h-[50px] inline-block bg-[#353c4d] mt-[10px] mb-[20px]"
            }
          ></span>
          <p className={"text-[#727f8c] m-0 text-[16px] font-medium"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </Box>
        <Box className={"row flex flex-wrap mx-[-15px]"}>
          <div className="col-lg-4 relative px-[15px] text-black">
            <div
              className="feature-block wow fadeInUp mb-[40px]"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <div className="inner-box relative px-[20px] pt-[35px] pb-[30px] shadow-[0px_2px_8px_rgba(0,0,0,.1)] bg-white">
                <span className="icon fa fa-file-text-o"></span>
                <h3
                  className={
                    "relative pl-[60px] text-[20px] font-bold text-[#1c1c1c] mb-[20px] text-left"
                  }
                >
                  Multipurpose{" "}
                </h3>
                <div className="text text-[#4d4d4d] block text-[15px] font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. printing and typesetting.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 relative px-[15px] text-black">
            <div
              className="feature-block wow fadeInUp mb-[40px]"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <div className="inner-box relative px-[20px] pt-[35px] pb-[30px] shadow-[0px_2px_8px_rgba(0,0,0,.1)] bg-white">
                <span className="icon fa fa-file-text-o"></span>
                <h3
                  className={
                    "relative pl-[60px] text-[20px] font-bold text-[#1c1c1c] mb-[20px] text-left"
                  }
                >
                  Multipurpose{" "}
                </h3>
                <div className="text text-[#4d4d4d] block text-[15px] font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. printing and typesetting.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 relative px-[15px] text-black">
            <div
              className="feature-block wow fadeInUp mb-[40px]"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <div className="inner-box relative px-[20px] pt-[35px] pb-[30px] shadow-[0px_2px_8px_rgba(0,0,0,.1)] bg-white">
                <span className="icon fa fa-file-text-o"></span>
                <h3
                  className={
                    "relative pl-[60px] text-[20px] font-bold text-[#1c1c1c] mb-[20px] text-left"
                  }
                >
                  Multipurpose{" "}
                </h3>
                <div className="text text-[#4d4d4d] block text-[15px] font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. printing and typesetting.
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </section>
  );
};
