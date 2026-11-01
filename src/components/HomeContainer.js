import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import Profile from "../assets/images/profile.png";

const btn =
  "inline-flex h-14 min-w-[10rem] items-center justify-center rounded-xl px-8 text-xl text-white sm:h-16 sm:text-2xl";

const HomeContainer = () => {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { duration: 1.6, ease: "power3.out" } })
        .from(".hero-title", { yPercent: -150, autoAlpha: 0 }, 0)
        .from(".hero-sub", { xPercent: -40, autoAlpha: 0 }, 0)
        .from(".hero-cta", { yPercent: 120, autoAlpha: 0 }, 0)
        .from(".hero-image", { xPercent: 25, autoAlpha: 0 }, 0);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="grid items-center gap-10 py-10 sm:py-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.15fr_1fr] lg:gap-8"
    >
      <div className="hero-image back relative order-1 mx-auto flex aspect-square w-[min(78vw,26rem)] items-end justify-center rounded-full lg:order-2 lg:w-full lg:max-w-[34rem]">
        <Image
          src={Profile}
          alt="Portrait of Aakash"
          priority
          sizes="(min-width: 1024px) 544px, 78vw"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="order-2 flex flex-col items-center gap-3 text-center lg:order-1 lg:items-start lg:text-left">
        <h1 className="hero-title text-[clamp(2.5rem,6.2vw,4.75rem)] leading-tight">
          Hello, I&apos;m Aakash
        </h1>
        <p className="min-h-[1.3em] text-[clamp(1.6rem,4.3vw,3.5rem)]">
          <span className="key_word">
            <TypeAnimation
              sequence={[
                "Web Developer",
                3000,
                "Web Designer",
                1000,
                "Full-Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
            />
          </span>
        </p>
        <p className="hero-sub text-[clamp(1.25rem,3vw,2.5rem)]">
          Wanna know more about me?
        </p>
        <div className="hero-cta mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start">
          <ScrollLink
            to="about"
            href="#about"
            smooth
            duration={500}
            offset={-80}
            className={`button cursor-pointer ${btn}`}
          >
            Scroll
          </ScrollLink>
          <span className="text-xl sm:text-3xl">OR</span>
          <Link
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`border-2 border-white/70 transition-colors hover:bg-white/10 ${btn}`}
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
