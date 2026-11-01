import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About Me" },
  { to: "experience", label: "Experience & Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact Me" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderLink = ({ to, label }, className) => (
    <ScrollLink
      to={to}
      href={`#${to}`}
      smooth
      spy
      duration={500}
      offset={-80}
      activeClass="!text-glow"
      onClick={() => setOpen(false)}
      className={`cursor-pointer transition-colors hover:text-glow ${className}`}
    >
      {label}
    </ScrollLink>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="container-x flex h-20 items-center justify-between"
      >
        <button
          type="button"
          onClick={() => scroll.scrollToTop()}
          className="key_word text-3xl sm:text-4xl"
        >
          Aakash
        </button>
        <ul className="hidden items-center gap-8 text-lg lg:flex xl:gap-12 xl:text-xl">
          {links.map((l) => (
            <li key={l.to}>{renderLink(l, "")}</li>
          ))}
        </ul>
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul
          id="mobile-menu"
          className="container-x flex flex-col pb-4 text-2xl lg:hidden"
        >
          {links.map((l) => (
            <li key={l.to}>{renderLink(l, "block py-3")}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
