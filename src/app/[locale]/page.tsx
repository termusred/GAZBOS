import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Cards from "../components/CardsSection";
import Whytho from "../components/why";
import Collaboration from "../components/Collab";
import Way from "../components/Ways";

export default function Home() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards></Cards>
      <Whytho></Whytho>
      <Collaboration></Collaboration>
      <Way></Way>
    </div>
  );
}
