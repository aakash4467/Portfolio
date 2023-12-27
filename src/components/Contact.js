import React from "react";

const Contact = () => {
  return (
    <>
      <div className="text-white h-[900px] w-[100%]">
        <h1 className="text-[50px]">Contact Me</h1>
        <div
          className="flex mt-[100px] h-[660px] w-[1500px] rounded-[30px] bg-[#333333] "
          data-scroll-section
        >
          <h1 className="w-[40%] text-[34px] ml-[100px] mt-[100px] text-center">
            I'm always eager to connect with fellow enthusiasts, potential
            collaborators, or anyone interested in discussing exciting projects.
            Feel free to reach out to me through the form below, and I'll get
            back to you as soon as possible. Let's explore opportunities and
            create something amazing together!
          </h1>
          <div className="flex flex-col w-[60%] h-[100%] ">
            <div className="h-[90%] flex flex-col mt-[100px] items-center gap-[40px] contact">
              <h1 className="text-[47px]">Get In Touch</h1>
              <input type="text" placeholder="Full Name" className="w-[55%]" />
              <input
                type="text"
                placeholder="Email Address"
                className="w-[55%]"
              />
              <input
                type="text"
                placeholder="Enter Message"
                className="w-[55%] dis"
              />
            </div>
            <div className="h-[10%]">
              <button className="bg-white h-[50px] ml-[190px] -mt-[40px]  text-3xl text-[white] rounded-xl w-[220px] button">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
