import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u8mb4sh";
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_dvbv4tn";
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "xtTfeYL2Iji2bi8MC";

const field =
  "w-full border-b-2 border-white/70 bg-transparent py-3 text-xl text-white placeholder:text-white/60 focus:border-glow focus:outline-none sm:text-2xl";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      form.current.reset();
      setStatus("success");
    } catch (err) {
      console.error("Error sending email:", err?.text || err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="grid gap-10 rounded-[30px] bg-panel p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
        <p className="text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
          I&apos;m always eager to connect with fellow enthusiasts, potential
          collaborators, or anyone interested in discussing exciting projects.
          Feel free to reach out to me through the form, and I&apos;ll get back
          to you as soon as possible. Let&apos;s explore opportunities and
          create something amazing together!
        </p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <h3 className="text-3xl sm:text-4xl">Get In Touch</h3>
          <label className="sr-only" htmlFor="user_name">
            Full Name
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Full Name"
            autoComplete="name"
            required
            className={field}
          />
          <label className="sr-only" htmlFor="user_email">
            Email Address
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            required
            className={field}
          />
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message"
            required
            rows={5}
            className="min-h-[10rem] w-full resize-y rounded-xl bg-[#3f3f3f] p-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-glow sm:text-xl"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="button h-14 w-full rounded-xl px-8 text-xl text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start sm:text-2xl"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          <p
            role="status"
            aria-live="polite"
            className={`min-h-[1.5rem] text-lg ${status === "error" ? "text-red-300" : "text-glow"}`}
          >
            {status === "success" && "Message sent. I’ll get back to you soon."}
            {status === "error" &&
              "Your message wasn’t sent. Please try again in a moment."}
          </p>
        </form>
      </div>
      <p className="mt-16 text-center text-white/60">
        © {new Date().getFullYear()} Aakash
      </p>
    </section>
  );
};

export default Contact;
