import Image from "next/image";
import React from "react";
import Picture from "../assets/images/photo.jpg";

const About = () => {
  return (
    <div
      className="flex mt-[150px] h-[760px] w-[1500px] rounded-[30px] bg-[#333333] "
      data-scroll-section
    >
      <div className="flex flex-col text-[50px] ml-[40px] w-[40%] mt-[10px] gap-[70px] text-white">
        <h1>About Me</h1>
        <Image
          src={Picture}
          alt="Picture"
          width={430}
          height={430}
          className=" -mt-[10px] -ml-[0px] rounded-[40px] object-contain"
        />
      </div>
      <div className="w-[60%] text-white text-[25.05px] text-justify -ml-[90px] mt-[140px] mr-[30px] flex flex-col gap-[10px]">
        <p>
          Welcome to my corner of the digital universe! I am a passionate
          autodidact fueled by an unrelenting thirst for knowledge. My life's
          mantra revolves around the belief that in this vast and enigmatic
          cosmos, knowledge becomes truly meaningful.
        </p>
        <p>
          I thrive on the relentless pursuit of wisdom, always eager to broaden
          my horizons and delve into the profound depths of understanding.
          Beyond the confines of traditional education, I am a self-driven
          learner, constantly acquiring new skills, exploring diverse subjects,
          and adapting to the dynamic landscape of our world.
        </p>
        <p>
          With an insatiable curiosity, I embark on the lifelong journey of
          learning, where each nugget of knowledge becomes a vital piece in the
          mosaic of my intellectual growth. Join me as I embrace the
          ever-evolving landscape of discovery and transform each lesson into a
          stepping stone toward personal and professional excellence. Let's make
          every piece of knowledge count in this beautiful mosaic of lifelong
          learning!
        </p>
      </div>
    </div>
  );
};

export default About;
