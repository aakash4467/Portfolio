import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      fullName: fullName,
      email: email,
      message: message,
    };

    emailjs
      .sendForm(
        "service_u8mb4sh",
        "template_dvbv4tn",
        e.target,
        "xtTfeYL2Iji2bi8MC"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );

    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="text-white h-[900px] w-[100%]">
      <h1 className="text-[50px]">Contact Me</h1>
      <div
        className="flex mt-[100px] h-[660px] w-[1500px] rounded-[30px] bg-[#333333] "
        data-scroll-section
      >
        <h1 className="w-[40%] text-[34px] ml-[100px] mt-[100px] text-center">
          I'm always eager to connect with fellow enthusiasts, potential
          collaborators, or anyone interested in discussing exciting projects.
          Feel free to reach out to me through the form below, and I'll get back
          to you as soon as possible. Let's explore opportunities and create
          something amazing together!
        </h1>
        <div className="flex flex-col w-[60%] h-[100%] ">
          <form onSubmit={sendEmail}>
            <div className="h-[90%] flex flex-col mt-[100px] items-center gap-[40px] contact">
              <h1 className="text-[47px]">Get In Touch</h1>
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-[55%]"
              />
              <input
                type="text"
                placeholder="Email Address"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[55%]"
              />
              <input
                type="text"
                placeholder="Enter Message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-[55%] dis"
              />
              <button
                className="bg-white h-[70px] -ml-[240px] -mt-[20px]  text-3xl text-[white] rounded-xl w-[220px] button"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
