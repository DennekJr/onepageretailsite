import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/system";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Features } from "./components/features";
import Services from "./components/services";
import { CreativeWork } from "./components/CreativeWork";
import { OurTeam } from "./components/OurTeam";
import { AboutUs } from "./components/AboutUs";
import { OurPrice } from "./components/OurPrice";
import { WhyChooseUs } from "@/app/(home)/components/WhyChooseUs";
import { Contact } from "@/app/(home)/components/Contact";
import { Footer } from "@/app/(home)/components/Footer";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }} className={"bg-white"}>
      <NavBar />
      <Hero />
      <Features />
      <Services />
      <CreativeWork />
      <OurTeam />
      <AboutUs />
      <OurPrice />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </Box>
  );
}
