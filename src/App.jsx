import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
