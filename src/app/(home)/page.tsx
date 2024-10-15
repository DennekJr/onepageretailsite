import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/system";
import NavBar from "@/app/(home)/components/NavBar";
import { Hero } from "@/app/(home)/components/Hero";
import { Features } from "@/app/(home)/components/features";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <NavBar />
      <Hero />
      <Features />
    </Box>
  );
}
