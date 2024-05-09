import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className="flex items-center gap-[400px] h-[120px] w-full"
      data-scroll-section
    >
      <h1 className="text-[40px] text-[#ffffff]" onClick={scrollToTop}>
        LOGO
      </h1>
      <div className="text-white text-[28px] flex w-full gap-[70px] items-center">
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          About Me
        </ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500}>
          Experience & Skills
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact Me
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
