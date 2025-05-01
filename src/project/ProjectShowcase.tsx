"use client";

import React, { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

// Define the structure for your project data
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

// List of your projects
const projects: Project[] = [
  {
    title: "Echorite",
    description:
      "A blog app that lets users register, login, create, edit posts and read blogs posted by others.",
    image: "blog.jpg",
    technologies: [
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
      "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png",
      "https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmT8HtltidnDUJvGcRYzg8B9h8zM-2O-FZw&s",
    ],
  },
  {
    title: "UsePopcorn",
    description:
      "A simple movie search app where users can find movies, see details like images and descriptions, add movies to their watchlist, and rate the ones they've watched.",
    image: "movieApp.jpg",
    technologies: [
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
    ],
  },
  {
    title: "Flowerfusion",
    description:
      "A flower shop page featuring a neat display of flowers in a simple and visually appealing design.",
    image: "flower.jpg",
    technologies: [
      "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    ],
  },
];

export const ProjectShowcase: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 overflow-hidden">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left side - Project Images with stacked effect */}
        <div>
          <div className="relative h-80 w-full">
            {projects.map((project, index) => {
              const offset =
                (index - active + projects.length) % projects.length;
              const isCurrent = offset === 0;
              return (
                <motion.div
                  key={project.title}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: offset * 5,
                    x: offset * 20,
                    y: offset * 10,
                  }}
                  animate={{
                    opacity: isCurrent ? 1 : 0.6,
                    scale: isCurrent ? 1 : 0.9,
                    rotate: isCurrent ? 0 : offset * 5,
                    x: isCurrent ? 0 : offset * 20,
                    y: isCurrent ? 0 : offset * 10,
                    zIndex: isCurrent ? 40 : 30 - offset,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                  style={{
                    filter: isCurrent ? "none" : "blur(0px)",
                    boxShadow: isCurrent
                      ? "0 10px 30px rgba(0,0,0,0.2)"
                      : "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right side - Project Details */}
        <div className="flex flex-col justify-between relative">
          <div className="h-64 overflow-y-auto pr-2">
            <h3 className="text-3xl font-bold text-gray-700 mb-4">
              {projects[active].title}
            </h3>

            <p className="text-gray-600 text-lg mb-4">
              {projects[active].description}
            </p>

            <div className="flex flex-wrap">
              {projects[active].technologies.map((src, i) => (
                <div
                  key={i}
                  className="border p-2 rounded-full -ml-2 first:ml-0 bg-gray-100 mb-2"
                >
                  <img src={src} alt="" className="h-6 w-6 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <IconArrowRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
