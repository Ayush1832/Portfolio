import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-slate-300 antialiased selection:bg-purple-500/30 selection:text-white">
      {/* Fixed layered background */}
      <div className="fixed inset-0 -z-10">
        {/* Base dark color */}
        <div className="absolute inset-0 bg-[#030712]"></div>
        {/* Subtle grid */}
        <div className="bg-grid absolute inset-0"></div>
        {/* Purple glow — top center */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-purple-700/10 blur-[130px] pointer-events-none"></div>
        {/* Cyan glow — middle right */}
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-cyan-700/8 blur-[110px] pointer-events-none"></div>
        {/* Violet glow — bottom left */}
        <div className="absolute bottom-0 -left-32 w-[450px] h-[450px] rounded-full bg-violet-800/8 blur-[100px] pointer-events-none"></div>
      </div>

      {/* Navbar is full-width, outside container */}
      <Navbar />

      {/* Page content */}
      <div className="container mx-auto px-6 lg:px-8 pt-20">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
