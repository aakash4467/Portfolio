import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useLocoScroll } from "@/hooks/useLocoScroll";
import Navbar from "@/components/Navbar";
import HomeContainer from "@/components/HomeContainer";
import About from "@/components/About";
import ExperienceSkill from "@/components/ExperienceSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll();

  useEffect(() => {
    const t = setTimeout(() => setPreloader(false), 1700);
    return () => clearTimeout(t);
  }, []);

  if (preloader) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <TypeAnimation
          sequence={["Welcome To My Portfolio"]}
          wrapper="span"
          speed={50}
          className="key_word text-[clamp(2rem,7vw,4rem)]"
        />
      </div>
    );
  }

  return (
    <div id="main-container" className="overflow-x-clip">
      <Navbar />
      <main className="container-x">
        <HomeContainer />
        <About />
        <ExperienceSkill />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
