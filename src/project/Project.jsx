import ProjectShowcase from "./ProjectShowcase";

export default function Project() {
  return (
    <div id="projects" className="overflow-x-hidden px-4 sm:px-6 lg:px-8">
      {/* Divider */}
      <hr className="border-t border-gray-200 mb-6" />

      {/* Header */}
      <div className="text-center">
        <span className="text-md font-mono text-purple-900">Projects</span>

        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 leading-tight mt-2">
          Here are some projects
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl">I've worked on</p>
      </div>

      {/* Bottom Divider */}
      <hr className="border-t border-gray-200 my-8" />

      {/* Projects */}
      <div>
        <ProjectShowcase />
      </div>
    </div>
  );
}
