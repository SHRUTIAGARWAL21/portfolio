import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center sm:px-2 md:px-16 py-3 border-b">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src="logo.png" className="h-11 w-11 sm:mx-0 xl:ml-16" alt="Logo" />

        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src="/hamburger-menu-svgrepo-com.svg"
            alt="menu"
            className="h-10 w-10"
          />
        </button>
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex space-x-6 border rounded-full px-6 py-2">
        <a
          href="#home"
          className="text-gray-500 hover:text-gray-800 font-medium"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-500 hover:text-gray-800 font-medium"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-500 hover:text-gray-800 font-medium"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-500 hover:text-gray-800 font-medium"
        >
          Contact
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-2 md:mx-0 xl:mr-16">
        <a
          href="https://leetcode.com/u/ShrutiAgarwal_21/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256"
            className="h-7 w-7"
            alt="LeetCode"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shruti-agarwal-b99054263/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            className="h-7 w-7"
            alt="LinkedIn"
          />
        </a>
        <a
          href="https://github.com/SHRUTIAGARWAL21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.icon-icons.com/3261/PNG/512/github_logo_icon_206752.png"
            className="h-7 w-7"
            alt="GitHub"
          />
        </a>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-gray-50 flex flex-col px-6 py-4 z-10">
          <div className="flex justify-between items-center mb-8">
            <img src="logo.png" className="h-10 w-10" alt="Logo" />
            <button onClick={() => setMenuOpen(false)}>
              <img
                src="https://media.istockphoto.com/id/1423112183/vector/close-button-icon.jpg?s=612x612&w=0&k=20&c=0pLI4ki-ptHUdLYRhVUSI8buP3tGnu9NdFYMmrw1KK4="
                className="h-8 w-8"
              />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            <a href="#home" className="text-gray-700 font-semibold">
              Home
            </a>
            <a href="#about" className="text-gray-500 hover:text-gray-700">
              About
            </a>
            <a href="#blog" className="text-gray-500 hover:text-gray-700">
              Blog
            </a>
            <a href="#projects" className="text-gray-500 hover:text-gray-700">
              Projects
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
