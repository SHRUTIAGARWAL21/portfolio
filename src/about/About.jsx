"use client";
import React from "react";
import { techStack, tools } from "../data/techData";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

export default function About() {
  return (
    <>
      {/* Top divider */}
      <hr className="border-t border-gray-200 max-w-10xl" />

      <div id="about" className=" mx-auto text-center">
        <span className="text-md font-mono text-purple-900 ">About</span>
        <hr className="border-t border-gray-200 max-w-10xl mb-6" />
        <hr className="border-t border-gray-200 max-w-10xl" />
        <h2 className="md:text-4xl sm:text-5xl font-semibold text-gray-800 leading-tight">
          Explore more about my skills,
          <br />
          and what drives me.
        </h2>
      </div>

      <hr className="border-t border-gray-200 pb-10" />

      {/* Two-column grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-8 gap-4 mt-4 px-6 sm:px-12 mb-40"> */}

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 mt-4 mb-36">
        {/* ─── First column (3/8) ─── */}
        <div className="sm:col-span-1 md:col-span-3 space-y-4">
          {/* Learn more about me (short) */}
          <div className="bg-white px-4 pt-4 pb-0 rounded-lg border border-gray-200 h-48 flex items-start justify-between">
            {/* Left Content */}
            <div className="w-full sm:w-2/3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Learn more about me
              </h2>
              <p className="text-gray-700 text-sm">
                Hello, I’m Shruti—a full-stack developer passionate about
                elegant, user-focused solutions.
              </p>
            </div>

            {/* Right Image (tilted upwards from left, same hover) */}
            <div className="w-full sm:w-1/3 flex justify-center">
              <div className="group relative">
                <img
                  src="/myPhoto.jpeg"
                  alt="Shruti"
                  className="w-30 h-40 rounded-lg object-cover border transform rotate-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Toolbox (tall, horizontal scroll) */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 h-64 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              My Toolbox
            </h2>
            <p className="text-gray-600 text-sm text-center mb-4">
              Check out my favorite tools
            </p>

            <div className="flex-1 -mb-12">
              <InfiniteMovingCards
                items={tools}
                speed="normal"
                direction="left"
              />
            </div>
          </div>
        </div>

        {/* ─── Second column (5/8) ─── */}
        <div className="sm:col-span-1 md:col-span-5 space-y-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 h-64 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              My tech stack
            </h2>
            <p className="text-gray-600 text-sm text-center mb-4">
              I constantly try to improve
            </p>

            <div className="flex-1 -mb-12">
              <InfiniteMovingCards
                items={techStack}
                speed="normal"
                direction="right"
              />
            </div>
          </div>

          {/* My approach (short) */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 h-48">
            <h2 className="text-xl font-bold text-gray-800 mb-2 sm:mb-10 text-center">
              My approach
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "Plan & Design", desc: "Requirements & wireframes" },
                { label: "Development", desc: "Clean, efficient code" },
                { label: "Testing", desc: "Reliability & performance" },
                { label: "Deployment", desc: "Version-controlled releases" },
              ].map((step) => (
                <div
                  key={step.label}
                  className="p-2 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <h3 className="text-sm font-semibold text-purple-700 mb-1">
                    {step.label}
                  </h3>
                  <p className="text-xs text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
