import About from "@/components/About";
import HomeContainer from "@/components/HomeContainer";
import Navbar from "@/components/Navbar";
import { useLocoScroll } from "@/hooks/useLocoScroll";
import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ExperienceSkill from "@/components/ExperienceSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);

  useLocoScroll();

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <div className="h-[100%]" id="main-container" data-scroll-conatainer>
      {preloader ? (
        <div className="key_word h-[100vh]  flex justify-center items-center">
          <TypeAnimation
            sequence={["Welcome To My Portfolio"]}
            wrapper="span"
            style={{
              fontSize: "4em",
              color: "white",
            }}
            speed={50}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <HomeContainer />
          <About />
          <ExperienceSkill />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Index;
