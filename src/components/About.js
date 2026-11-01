import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Picture from "../assets/images/photo.jpg";
import SectionTitle from "./SectionTitle.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 85%",
            end: "top 35%",
            scrub: 1,
          },
        })
        .from(".about-img", { scale: 0.8, autoAlpha: 0, ease: "power2.out" })
        .from(
          ".about-text",
          { y: 60, autoAlpha: 0, ease: "power2.out" },
          "<0.2",
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="py-16 md:py-24">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid items-center gap-8 rounded-[30px] bg-panel p-6 sm:p-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14 lg:p-14">
        <Image
          src={Picture}
          alt="Photo of Aakash"
          sizes="(min-width: 1024px) 352px, 80vw"
          className="about-img mx-auto h-auto w-full max-w-[22rem] rounded-[40px]"
        />
        <div className="about-text space-y-5 text-base leading-relaxed text-white/90 sm:text-lg xl:text-xl">
          <p>
            Welcome to my corner of the digital universe! I am a passionate
            autodidact fueled by an unrelenting thirst for knowledge. My
            life&apos;s mantra revolves around the belief that in this vast and
            enigmatic cosmos, knowledge becomes truly meaningful.
          </p>
          <p>
            I thrive on the relentless pursuit of wisdom, always eager to
            broaden my horizons and delve into the profound depths of
            understanding. Beyond the confines of traditional education, I am a
            self-driven learner, constantly acquiring new skills, exploring
            diverse subjects, and adapting to the dynamic landscape of our
            world.
          </p>
          <p>
            With an insatiable curiosity, I embark on the lifelong journey of
            learning, where each nugget of knowledge becomes a vital piece in
            the mosaic of my intellectual growth. Join me as I embrace the
            ever-evolving landscape of discovery and transform each lesson into
            a stepping stone toward personal and professional excellence.
            Let&apos;s make every piece of knowledge count in this beautiful
            mosaic of lifelong learning!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
