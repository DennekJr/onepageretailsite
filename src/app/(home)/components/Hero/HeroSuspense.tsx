import { Skeleton } from "@mui/material";

export const HeroSuspense = () => {
  return (
    <section
      className={"bg-[#232834] slider text-center d-flex align-items-center"}
    >
      <Skeleton className="heroContainer text-white">
        <Skeleton className="heroContent">
          <Skeleton className={"text-[#02a2c4]"}></Skeleton>
          <Skeleton className={"bg-white"}></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton className="btn-color">Buy Now</Skeleton>
        </Skeleton>
      </Skeleton>
    </section>
  );
};
