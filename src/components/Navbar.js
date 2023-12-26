import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex items-center gap-[400px] h-[120px] w-full"
      data-scroll-section
    >
      <h1 className="text-[40px] text-[#ffffff] ">LOGO</h1>
      <div className="text-white text-[28px] flex w-full gap-[70px] items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Me</Link>
        <Link href={"/"}>Education & Skills</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Contact Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
