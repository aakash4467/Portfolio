import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Port from "../assets/images/port.png";
import ShareMe from "../assets/images/share-me.png";
import Rinnegan from "../assets/images/rinnegan.png";
import Code from "../assets/images/code.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top 94%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="text-white mt-[150px] h-[900px] w-[100%]" id="projects">
        <h1 className="text-[50px]" ref={titleRef}>
          Projects
        </h1>
        <div className="flex gap-[50px]" ref={projectRef}>
          <div
            className="flex flex-col mt-[150px] items-center h-[460px] w-[700px] rounded-[30px] border border-black bg-[#333333] "
            data-scroll-section
          >
            <div className="h-[15%] w-[100%] flex justify-between items-center ">
              <Image
                src={Rinnegan}
                alt="eye"
                className="h-[50px] w-[50px] ml-4"
              />
              <h1 className="text-[30px] mt-1 ">Portfolio</h1>
              <Image
                src={Code}
                alt="code"
                className="h-[70px] w-[70px] -mt-2"
              />
            </div>
            <Image
              src={Port}
              alt="portfolio"
              className="object-fill  h-[85%] w-[100%] rounded-b-[33px]"
            />
          </div>
          <div
            className="flex flex-col items-center mt-[150px] h-[460px] w-[700px] rounded-[30px] border border-black bg-[#333333] "
            data-scroll-section
          >
            <div className="h-[15%] w-[100%] flex justify-between items-center ">
              <Image
                src={Rinnegan}
                alt="eye"
                className="h-[50px] w-[50px] ml-4"
              />
              <h1 className="text-[30px] mt-1 ">Share Me</h1>
              <Image
                src={Code}
                alt="code"
                className="h-[70px] w-[70px] -mt-2"
              />
            </div>
            <Image
              src={ShareMe}
              alt="portfolio"
              className="object-fill  h-[85%] w-[100%] rounded-b-[33px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
