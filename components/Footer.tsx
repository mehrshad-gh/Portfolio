"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/mehrshad-gh", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mehrshad-ghasemi-7b6a02258", label: "LinkedIn" },
  { icon: Mail, href: "mailto:MehrshadGhasemi77@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 md:mb-0 text-sm"
          >
            © {new Date().getFullYear()} Mehrshad Ghasemi. All rights reserved.
          </motion.p>

          <div className="flex space-x-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={22} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
