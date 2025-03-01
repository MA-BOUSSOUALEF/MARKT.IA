import React from "react";

function Pricing() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white">
      {/* Texte à gauche */}
      <div className="max-w-lg text-left">
        <h2 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
            AI-Driven
          </span>{" "}
          <span className="text-black">marketing</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Elevate your brand to new heights with our cutting-edge marketing
          strategies. We specialize in delivering tailored solutions that
          captivate your audience and amplify your online presence.
        </p>

        {/* Boutons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-md hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-6 py-3 flex items-center border-2 border-gray-300 text-white font-semibold rounded-full hover:bg-gray-100 transition">
            <span className="mr-2">▶</span> Watch a demo
          </button>
        </div>

        {/* Évaluation */}
        <div className="mt-6 text-gray-700 text-lg">
          <p className="font-semibold">Tested software reviewers</p>
          <div className="flex items-center mt-1">
            <span className="text-yellow-400 text-2xl">★★★★★</span>
            <span className="ml-2 font-bold text-black text-xl">4.9</span>
            <span className="text-gray-500 text-lg">/5.0</span>
          </div>
        </div>
      </div>

      {/* Image à droite */}
      <div className="mt-10 md:mt-0 md:w-1/2">
        <img
          src="https://lurantech.com/images/home/getstarted.jpg"
          alt="AI Marketing"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
}

export default Pricing;
