"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import NextLink from "next/link";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center item-center justify-center mt-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/kevin.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hello,I'm Kevin Omwoyo!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2lx">
            An
            <span className="font-sembold text-teal-600 px-1">
              Accomplished Frontend Engineer
            </span>
            specializing in front-end development and UI/UX design. Proficient
            in leveraging React.js,ReactNative for Android and Figma to create dynamic,
            user-centric interfaces while collaborating seamlessly with
            cross-functional teams. Adept in translating design concepts into
            intuitive, responsive web applications, ensuring optimal user
            experiences. Proven track record in agile environments, balancing
            technical expertise with a keen eye for design to deliver innovative
            and impactful solutions.
          </p>
          <div className="sm:space-x-4 md:space-x-6">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold cursor-pointer px-3 md:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Projects
            </Link>
            {/* <NextLink
              href="https://dribbble.com/rennie_design"
              target="_blank"
              className="text-neutral-100 font-semibold cursor-pointer px-3 md:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700">
              Dribble
            </NextLink> */}
            {/* <NextLink
              href="https://docs.google.com/document/d/1OyLKqtjtckjKfSwWChzMNWwiPhD5drAPW69kQoKnlzw/edit?usp=sharing"
              target="_blank"
              className="text-neutral-100 font-semibold cursor-pointer px-3 md:px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700">
              My Resume
            </NextLink> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
