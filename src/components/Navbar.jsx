import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://img.lovepik.com/freepng/32/33/97/93m58PICW31is53frb58PICj5_PIC2018.png_wh860.png"
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-xl font-bold">MRKT.AI</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium text-sm">
        {/* Feature - Dropdown en premier */}
        <li
          className={`relative cursor-pointer ${
            active === "Feature" ? "text-black font-semibold relative" : "hover:text-gray-900"
          }`}
          onMouseEnter={() => setIsFeatureOpen(true)}
          onMouseLeave={() => setIsFeatureOpen(false)}
          onClick={() => setActive("Feature")}
        >
          <span className="flex items-center">
            Feature ▼
          </span>

          {/* Soulignement si actif */}
          {active === "Feature" && (
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-700"></span>
          )}

          {/* Menu déroulant */}
          {isFeatureOpen && (
            <div className="absolute left-0 mt-2 w-[450px] bg-black text-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-4 border border-gray-700 z-50">
              {/* Colonne 1 */}
              <div>
                <h4 className="font-bold mb-1 text-sm">AI Interview</h4>
                <p className="text-gray-400 text-xs">
                  Practice and refine your interview skills.
                </p>

                <h4 className="font-bold mt-3 mb-1 text-sm">
                  Resume Scorer & Recommendation
                </h4>
                <p className="text-gray-400 text-xs">
                  Get an instant score for your resume.
                </p>

                <h4 className="font-bold mt-3 mb-1 text-sm">Resume Proofreading</h4>
                <p className="text-gray-400 text-xs">
                  Fix your resume's mistakes easily.
                </p>
              </div>

              {/* Colonne 2 */}
              <div>
                <h4 className="font-bold mb-1 text-sm">Cover Letter Generation</h4>
                <p className="text-gray-400 text-xs">
                  Create personalized cover letters.
                </p>

                <h4 className="font-bold mt-3 mb-1 text-sm">Resume Checker</h4>
                <p className="text-gray-400 text-xs">
                  Get a detailed analysis of your resume.
                </p>

                <h4 className="font-bold mt-3 mb-1 text-sm">AI Career Coach</h4>
                <p className="text-gray-400 text-xs">
                  Chat with an advanced AI career coach.
                </p>
              </div>
            </div>
          )}
        </li>

        {/* Autres liens */}
        {["Home", "Testimonials", "Pricing", "Download"].map((item) => (
          <li
            key={item}
            className={`cursor-pointer ${
              active === item
                ? "text-black font-semibold relative"
                : "hover:text-gray-900"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
            {active === item && (
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-700"></span>
            )}
          </li>
        ))}
      </ul>

      {/* Call-To-Action Button */}
      <button className="px-5 py-2 border-2 border-purple-400 text-white font-medium rounded-full hover:bg-purple-50 transition text-sm">
        Start Free Trial
      </button>
    </nav>
  );
}

export default Navbar;
