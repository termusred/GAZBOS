import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}
