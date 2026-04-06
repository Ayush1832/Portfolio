import { useState, useEffect } from "react";
import logo from "../assets/AN logo.png";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", to: "about-section" },
  { label: "Experience", to: "experience-section" },
  { label: "Projects", to: "projects-section" },
  { label: "Contact", to: "contact-section" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY > 60) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass =
    scrolled || mobileOpen
      ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/25"
      : "bg-transparent";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="container mx-auto px-6 lg:px-8">

        {/* ── Main row ── */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <img src={logo} alt="Ayush Nayak" className="w-12 h-auto" />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="relative cursor-pointer px-4 py-2 text-sm font-medium text-slate-400
                           hover:text-white rounded-lg hover:bg-white/[0.05]
                           transition-colors duration-200 group"
              >
                {link.label}
                <span
                  className="absolute bottom-1 left-4 right-4 h-px rounded-full
                             bg-gradient-to-r from-purple-400 to-cyan-400
                             scale-x-0 group-hover:scale-x-100
                             transition-transform duration-300 origin-left"
                />
              </Link>
            ))}
          </div>

          {/* Social icons + hamburger */}
          <div className="flex items-center gap-1">
            {/* Desktop socials */}
            <div className="hidden md:flex items-center gap-1 mr-2">
              <div className="w-px h-4 bg-white/15 mr-2" />
              <a
                href="https://www.linkedin.com/in/ayushh-nayak/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://github.com/Ayush1832"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="border-t border-white/[0.06] py-3 pb-5 flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setMobileOpen(false)}
                      className="block cursor-pointer px-4 py-3 text-sm text-slate-400
                                 hover:text-white hover:bg-white/[0.05] rounded-xl
                                 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile socials */}
                <div className="flex gap-2 px-4 pt-3 mt-1 border-t border-white/[0.06]">
                  <a
                    href="https://www.linkedin.com/in/ayushh-nayak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-slate-400
                               hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-200"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/Ayush1832"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-slate-400
                               hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;
