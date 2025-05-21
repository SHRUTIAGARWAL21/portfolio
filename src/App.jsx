import Navbar from "./homePage/Navbar";
import Intro from "./homePage/Intro";
import About from "./about/About";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="md:mx-0 xl:mx-28 border-l border-r">
        <Navbar />

        <div className="relative flex">
          <div
            className="hidden md:block w-8 
               bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_3px)]"
          />

          <div className="flex-1 border-l border-r border-gray-200 mt-20">
            <Intro />
            <About />
            <Project />
            <Contact />
          </div>

          <div
            className="hidden md:block w-8 
               bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_3px)]"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
