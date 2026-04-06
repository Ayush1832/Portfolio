import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: CONTACT.address,
    href: null,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: CONTACT.phoneNo,
    href: `tel:${CONTACT.phoneNo}`,
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
];

const Contact = () => {
  return (
    <section id="contact-section" className="py-24 pb-32">
      {/* Section header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <span className="section-label">Let's Connect</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just a chat about blockchain!
        </p>
      </motion.div>

      {/* Contact cards */}
      <div className="max-w-3xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6 text-center h-full">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 text-base">{item.icon}</span>
              </div>

              {/* Label */}
              <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-widest mb-2">
                {item.label}
              </p>

              {/* Value */}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-slate-300 text-sm font-medium hover:text-purple-400 transition-colors duration-200 break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-slate-300 text-sm font-medium">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social links */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mt-10"
      >
        <a
          href="https://www.linkedin.com/in/ayushh-nayak/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl glass-card text-slate-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/Ayush1832"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl glass-card text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-1"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
      </motion.div>

      {/* Footer note */}
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-slate-700 text-xs mt-10"
      >
        Designed & Built by Ayush Nayak
      </motion.p>
    </section>
  );
};

export default Contact;
