// PAGE IMPORTS
// Import the primary page components used on the home page.
import Services from "./Services";
import TechProductShowcase from "../TechProductShowcase";
import Hero from "../Hero";
// HOME COMPONENT
// The main landing page component for the website.
function Home() {
  return (
    <div className="relative isolate min-h-screen ">
      {/* Background overlay used for subtle page styling. */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden opacity-20">
      </div>

      {/* Foreground page content. */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <TechProductShowcase />
      </div>
    </div>
  );
}

export default Home;
