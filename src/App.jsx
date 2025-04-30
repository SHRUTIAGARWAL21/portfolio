import Navbar from "./homePage/Navbar";
import Intro from "./homePage/Intro";
import About from "./about/About";
import Project from "./project/Project";
import Contact from "./contact/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />

      {/* OUTER MARGIN: increased for more space from the edges */}
      <div className="">
        {/* Main content wrapper with stripes */}
        <div className="relative flex">
          {/* Left Stripe */}
          <div
            className="hidden md:block w-8 md:mx-0 xl:ml-28
             bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_3px)]"
          />

          {/* Main content section */}
          <div className="flex-1">
            <Intro />
            <About />
            <Project />
            <Contact />
          </div>

          {/* Right Stripe */}
          <div
            className="hidden md:block w-8  md:mx-0 xl:mr-28
             bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_3px)]"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
