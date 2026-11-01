import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Moru from "../assets/images/moru.png";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JS from "../assets/images/javascript.png";
import ReactJS from "../assets/images/react.png";
import Mongo from "../assets/images/mongo-db.png";
import Next from "../assets/images/next.png";
import Git from "../assets/images/git.png";
import Github from "../assets/images/github.png";
import SectionTitle from "./SectionTitle.js";

gsap.registerPlugin(ScrollTrigger);

// Add new entries here; they alternate left/right on desktop and stack on mobile.
const experience = [
  {
    date: "03-2023",
    title: "Moru: Digital Wallet",
    href: "https://moru.com.np/",
    label: "moru.com.np",
    image: Moru,
  },
  { date: "2024", title: "Help Me Add", subtitle: "My Experience Timeline" },
];

const skills = [
  { name: "HTML", src: HTML },
  { name: "CSS", src: CSS },
  { name: "JavaScript", src: JS },
  { name: "React", src: ReactJS },
  { name: "MongoDB", src: Mongo },
  { name: "Next.js", src: Next, round: true },
  { name: "Git", src: Git },
  { name: "GitHub", src: Github },
];

const tile =
  "h-20 w-20 shrink-0 rounded-[20px] sm:h-28 sm:w-28 lg:h-[150px] lg:w-[150px]";

const ExperienceSkill = () => {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".exp-timeline", {
        y: 100,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="py-16 md:py-24">
      <SectionTitle>Experience &amp; Skills</SectionTitle>

      <ol className="exp-timeline relative">
        <span
          aria-hidden
          className="absolute bottom-0 left-[11px] top-0 w-px bg-white/40 md:left-1/2"
        />
        {experience.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <li
              key={item.title}
              className="relative pb-12 pl-12 last:pb-0 md:grid md:grid-cols-2 md:gap-x-20 md:pl-0"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1 h-[22px] w-[22px] rounded-full bg-white ring-4 ring-ink md:left-1/2 md:-translate-x-1/2"
              />
              <div className={left ? "md:col-start-1" : "md:col-start-2"}>
                <time
                  className={`mb-3 block text-xl text-white/70 ${left ? "md:text-right" : ""}`}
                >
                  {item.date}
                </time>
                <div
                  className={`flex items-center gap-4 sm:gap-6 ${left ? "md:flex-row-reverse" : ""}`}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} logo`}
                      sizes="150px"
                      className={`${tile} object-contain`}
                    />
                  ) : (
                    <div
                      aria-hidden
                      className={`${tile} flex items-center justify-center bg-[#D9D9D9] text-6xl leading-none text-black lg:text-8xl`}
                    >
                      +
                    </div>
                  )}
                  <div
                    className={`min-w-0 text-xl sm:text-2xl ${left ? "md:text-right" : ""}`}
                  >
                    <h3>{item.title}</h3>
                    {item.subtitle && <p>{item.subtitle}</p>}
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-glow hover:underline"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-16 rounded-[30px] bg-panel py-6 sm:py-8">
        <h3 className="sr-only">Skills</h3>
        <div className="overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className={`flex shrink-0 items-center ${copy === 1 ? "motion-reduce:hidden" : ""}`}
              >
                {skills.map((s) => (
                  <li key={s.name} className="px-3 sm:px-5">
                    <Image
                      src={s.src}
                      alt={s.name}
                      sizes="144px"
                      className={`h-20 w-20 object-contain sm:h-28 sm:w-28 lg:h-36 lg:w-36 ${s.round ? "rounded-3xl" : ""}`}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSkill;
