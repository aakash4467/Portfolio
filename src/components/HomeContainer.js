import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Profile from "../assets/images/profile.png";

const HomeContainer = () => {
  return (
    <div
      className="text-[#ffffff] mt-[80px] w-[100%] h-[75vh] flex "
      data-scroll-section
    >
      <div className="flex flex-col w-[60%] gap-[10px]">
        <h1 className="text-[76px] mt-[145px]">Hello, I'm Aakash</h1>
        <h1 className="text-[59px]">
          <span className="key_word">
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Web Designer",
                1000,
                "Full-Stack Developer",
                1000,
              ]}
              wrapper="span"
              style={{}}
              speed={50}
            />
          </span>
        </h1>
        <h1 className="text-[47px]">Wanna know more about me ?</h1>
        <div className="flex mt-5 items-center gap-[70px]">
          <button className="bg-white h-[70px] text-3xl text-[#403E3E] rounded-xl w-[205px] button">
            Scroll
          </button>
          <span className="text-[37px]">OR</span>
          <button className="bg-white h-[70px] text-3xl text-[#403E3E] rounded-xl w-[220px] button">
            Download CV
          </button>
        </div>
      </div>
      <div className="back flex mt-16 mr-[40px] justify-center rounded-full w-[40%] h-[80%]">
        <Image
          src={Profile}
          alt="Profile"
          width={1000}
          height={1000}
          className="w-[630px] h-[630px] -mt-8 bg-transparent object-contain"
        />
      </div>
    </div>
  );
};

export default HomeContainer;
