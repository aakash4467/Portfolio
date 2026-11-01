import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Port from "../assets/images/port.png";
import ShareMe from "../assets/images/share-me.png";
import Rinnegan from "../assets/images/rinnegan.png";
import Code from "../assets/images/code.svg";
import SectionTitle from "./SectionTitle";

gsap.registerPlugin(ScrollTrigger);

// Add new projects here; the grid handles the layout.
const projects = [
  {
    title: "Portfolio",
    image: Port,
    alt: "Screenshot of the portfolio website",
  },
  { title: "Share Me", image: ShareMe, alt: "Screenshot of the Share Me app" },
];

const Projects = () => {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".project-grid", {
        y: 100,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={root} className="py-16 md:py-24">
      <SectionTitle>Projects</SectionTitle>
      <div className="project-grid grid gap-6 md:grid-cols-2 lg:gap-12">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col overflow-hidden rounded-[30px] border border-white/10 bg-panel"
          >
            <header className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
              <Image
                src={Rinnegan}
                alt=""
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <h3 className="text-2xl sm:text-3xl">{p.title}</h3>
              <Image src={Code} alt="" className="h-10 w-10 sm:h-14 sm:w-14" />
            </header>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
