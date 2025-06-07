import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Cards from "../components/CardsSection";

export default function Home() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <Hero></Hero>
      <Cards></Cards>
    </div>
  );
}
