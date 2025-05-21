import { Button } from "../components/ui/moving-border";

export default function Intro() {
  return (
    <div id="intro" className="flex flex-col items-center text-center  md:px-0">
      {/* Profile Photo */}
      <div className="py-10">
        <div className="border rounded-full p-2 w-36 h-36 flex items-center justify-center">
          <div className="border rounded-full p-2 w-32 h-32 overflow-hidden">
            <img
              src="myPhoto.jpeg"
              className="h-28 w-28 object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 w-full max-w-10xl" />

      {/* Heading */}
      <div className="py-3">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Hey, I'm Shruti!
        </h2>
        <h2 className="text-4xl max-w-xl md:text-5xl font-semibold text-gray-800 mt-2">
          Welcome to my corner of the internet!
        </h2>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 w-full max-w-10xl" />

      <hr className="border-t border-gray-200 w-full max-w-10xl mt-9" />

      {/* Bio */}
      <div className="max-w-5xl px-6 md:px-0 text-gray-600 text-md ">
        <p>
          I’m a full-stack developer who loves bringing designs to life and
          building things that are both functional and visually appealing. I’m
          always experimenting with new technologies and finding ways to improve
          my skills, focusing on creating smooth, user-friendly experiences.
        </p>
      </div>

      <hr className="border-t border-gray-200 w-full max-w-10xl" />

      {/* resume button */}
      <a
        href="/shruti_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="py-16"
      >
        <Button>
          View Resume
          <div className="">
            <img
              src="arrow.png"
              className="h-5 w-5 rotate-[-25deg]" // 🎯 Rotate image a little
              alt="arrow"
            />
          </div>
        </Button>
      </a>
    </div>
  );
}
