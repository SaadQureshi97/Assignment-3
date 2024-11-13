// import Image from "next/link";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Management from "./Components/Management";
import Customize from "./Components/Customize";
import Customize2 from "./Components/Customize2";
import Work from "./Components/Work";
import Sponsors from "./Components/Sponsers";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Management />
      <Customize />
      <Customize2 />
      <Work />
      <Sponsors />
      <Footer />
    </div>
  );
}