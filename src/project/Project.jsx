import ProjectShowcase from "./ProjectShowcase";
export default function Project() {
  return (
    <div id="projects">
      <hr className="border-t border-gray-200 max-w-10xl" />

      <div className=" mx-auto text-center">
        <span className="text-md font-mono text-purple-900 ">Projects</span>
        <hr className="border-t border-gray-200 max-w-10xl mb-6" />
        <hr className="border-t border-gray-200 max-w-10xl" />
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 leading-tight">
          Here are some projects
          <br />
          <h2 className="text-gray-600">I've worked on</h2>
        </h2>
      </div>
      <hr className="border-t border-gray-200 pb-10 " />
      <div className="">
        <ProjectShowcase />
      </div>
    </div>
  );
}
