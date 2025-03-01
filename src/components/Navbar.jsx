import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gestion du mode sombre
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-10 bg-white dark:bg-gray-900 dark:text-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://img.lovepik.com/freepng/32/33/97/93m58PICW31is53frb58PICj5_PIC2018.png_wh860.png"
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-xl font-bold">MRKT.AI</h1>
      </div>

      {/* Menu Burger pour Mobile */}
      <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static left-0 top-16 w-full md:w-auto bg-white dark:bg-gray-900 shadow-md md:shadow-none 
        md:flex md:space-x-6 text-gray-700 dark:text-white font-medium text-sm transition-all duration-300
        ${isMenuOpen ? "block" : "hidden"} md:flex`}
      >
        {/* Feature - Dropdown */}
        
        <li
          className="relative px-4 py-2 md:py-0 cursor-pointer"
          onMouseEnter={() => setIsFeatureOpen(true)}
          onMouseLeave={() => setIsFeatureOpen(false)}
        >
          <span className="flex items-center">
            Feature ▼
          </span>

          {/* Dropdown Menu */}
          {isFeatureOpen && (
            <div className="absolute left-0 mt-2 w-[450px] bg-black text-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-4 border border-gray-700 z-50">
              <div>
                <h4 className="font-bold mb-1 text-sm">AI Interview</h4>
                <p className="text-gray-400 text-xs">Practice and refine your interview skills.</p>

                <h4 className="font-bold mt-3 mb-1 text-sm">Resume Scorer</h4>
                <p className="text-gray-400 text-xs">Get an instant score for your resume.</p>
              </div>

              <div>
                <h4 className="font-bold mb-1 text-sm">Cover Letter Generator</h4>
                <p className="text-gray-400 text-xs">Create personalized cover letters.</p>
              </div>
            </div>
          )}
        </li>

        {/* Autres liens */}
        {["Home", "Testimonials", "Pricing", "Download"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer px-4 py-2 md:py-0 ${
              active === item ? "text-black dark:text-white font-semibold" : "hover:text-gray-900 dark:hover:text-gray-300"
            }`}
            onClick={() => {
              setActive(item);
              setIsMenuOpen(false); // Ferme le menu sur mobile après sélection
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mode Sombre / Clair & CTA */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Bouton Mode Sombre / Clair */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-300" />}
        </button>

        {/* Bouton "Start Free Trial" */}
        <button className="px-5 py-2 border-2 border-purple-400 text-black dark:text-white font-medium rounded-full hover:bg-purple-50 dark:hover:bg-purple-800 transition text-sm">
          Start Free Trial
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
