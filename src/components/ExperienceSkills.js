import Image from "next/image";
import React from "react";
import Moru from "../assets/images/moru.png";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JS from "../assets/images/javascript.png";
import ReactJS from "../assets/images/react.png";
import Mongo from "../assets/images/mongo-db.png";
import Next from "../assets/images/next.png";
import Git from "../assets/images/git.png";

const ExperienceSkill = () => {
  return (
    <>
      <div className="text-white mt-[150px] h-[900px] w-[100%]">
        <h1 className="text-[50px]">Experience & Skills</h1>
        <div className="flex justify-center h-[100%] w-[100%] mt-[120px] relative">
          <div className="absolute flex items-center left-[163px] top-[100px]">
            <div className="text-[25px] mr-[10px]">
              <h1>Moru: Digitial Wallet</h1>
              <h1>https://moru.com.np/</h1>
            </div>
            <Image
              src={Moru}
              alt="moru"
              className="h-[150px] w-[150px] rounded-[20px] object-contain "
            />
          </div>
          <div className="absolute flex items-center right-[145px] top-[300px]">
            <div className="h-[150px] w-[150px] bg-[#D9D9D9] flex justify-center items-center rounded-[20px]">
              <h1 className="text-black text-[100px] text-center -mt-6">+</h1>
            </div>
            <div className="text-[25px] ml-[10px]">
              <h1>Help Me Add</h1>
              <h1>My Experience Timeline</h1>
            </div>
          </div>
          <div className="h-[600px] w-[1px] bg-white"></div>
          <div className="h-[1px] w-[180px] bg-white absolute left-[566px] top-[170px]  ">
            <h1 className="text-[25px] -mt-[30px] ml-4">03-2023</h1>
          </div>
          <div className="h-[1px] w-[180px] bg-white absolute right-[566px] top-[370px]  ">
            <h1 className="text-[25px] -mt-[30px] ml-12">2024</h1>
          </div>
          <div className="h-[20px] w-[20px] bg-white rounded-full absolute left-[728px] top-[160px]"></div>
          <div className="h-[20px] w-[20px] bg-white rounded-full left-[728px] absolute top-[360px]"></div>
        </div>
      </div>
      <div className="flex gap-[45px] items-center mt-[50px] h-[200px] w-[1500px] rounded-[30px] bg-[#333333] ">
        <Image
          src={HTML}
          alt="html"
          className="ml-[40px] h-[160px] w-[160px]"
        />
        <Image src={CSS} alt="css" className="h-[160px] w-[160px]" />
        <Image src={JS} alt="js" className="h-[160px] w-[160px]" />
        <Image src={ReactJS} alt="react" className="h-[160px] w-[160px]" />
        <Image src={Mongo} alt="mongo-db" className="h-[160px] w-[160px]" />
        <Image
          src={Next}
          alt="next"
          className="h-[145px] w-[145px] rounded-[45px]"
        />
        <Image src={Git} alt="git" className="h-[160px] w-[160px]" />
      </div>
    </>
  );
};

export default ExperienceSkill;
