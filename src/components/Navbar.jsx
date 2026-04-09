import { useEffect } from "react";
import { NAV } from "../content.js";

export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}{NAV.logo.first}
            <span className="text-blue-500">{NAV.logo.second}</span>{" "}
          </a>

          {/* Hamburger (mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV.links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {" "}{label}{" "}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
