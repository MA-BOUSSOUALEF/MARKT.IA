import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Features2 from "./components/Feature2";

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Features />
        <br />
        <Features2 />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
