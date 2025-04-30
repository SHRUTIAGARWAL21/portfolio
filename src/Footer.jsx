export default function Footer() {
  return (
    <footer className="mx-auto max-w-screen-lg px-6 md:px-12 pt-16 pb-12">
      <div className="flex flex-col md:flex-row md:items-start gap-24">
        {/* Left block */}
        <div className="flex-1 text-center md:text-left">
          <img
            src="logo.png"
            className="h-12 w-12 mx-auto md:mx-0"
            alt="Logo"
          />
          <p className="text-gray-700 pt-6">
            I'm Shruti – a full-stack developer. Thanks for checking out my
            site!
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            {[
              {
                href: "https://leetcode.com/u/ShrutiAgarwal_21/",
                src: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp&w=256",
                alt: "LeetCode",
              },
              {
                href: "https://www.linkedin.com/in/shruti-agarwal-b99054263/",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/SHRUTIAGARWAL21",
                src: "https://images.icon-icons.com/3261/PNG/512/github_logo_icon_206752.png",
                alt: "GitHub",
              },
            ].map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
              >
                <img src={src} className="h-6 w-6" alt={alt} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm pt-6">© 2025 Shruti Agarwal</p>
        </div>

        {/* Right block */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-gray-900 font-semibold text-lg">General</h2>
          <nav className="flex flex-col text-gray-700 space-y-2 pt-4">
            {["Home", "About", "Projects", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-gray-900 hover:underline transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
