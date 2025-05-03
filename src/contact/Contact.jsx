import { Button } from "../components/ui/moving-border";

export default function Contact() {
  return (
    <div id="contact" className="pt-4">
      <hr className="border-t border-gray-200 max-w-full" />

      <div className="mx-auto text-center ">
        <span className="text-md font-mono text-purple-900">Contact</span>
        <hr className="border-t border-gray-200 w-full mb-6" />
        <hr className="border-t border-gray-200 w-full" />
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">
          Ready to move forward with your project?
        </h2>

        <h2 className="text-gray-500 pt-4 text-lg sm:text-xl">
          Let’s connect and make it happen
        </h2>
      </div>
      <hr className="border-t border-gray-200 pb-14" />

      <div className="flex justify-center pb-14">
        <a href="shrutiagarwal4221@gmail.com">
          <Button>
            Get in touch
            <div className="pl-2">
              <img
                src="arrow.png"
                className="h-5 w-5 rotate-[-25deg]" // 🎯 Rotate image a little
                alt="arrow"
              />
            </div>
          </Button>
        </a>
      </div>

      <hr className="border-t border-gray-200" />
    </div>
  );
}
