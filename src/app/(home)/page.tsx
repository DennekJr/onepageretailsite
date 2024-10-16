import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/system";
import NavBar from "@/app/(home)/components/NavBar";
import { Hero } from "@/app/(home)/components/Hero";
import { Features } from "@/app/(home)/components/features";
import Services from "@/app/(home)/components/services";
import { CreativeWork } from "@/app/(home)/components/CreativeWork";
import { OurTeam } from "@/app/(home)/components/OurTeam";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }} className={"bg-white"}>
      <NavBar />
      <Hero />
      <Features />
      <Services />
      <CreativeWork />
      <OurTeam />
    </Box>
  );
}
