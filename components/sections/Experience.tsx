"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "WEBRUN Group Inc.",
    location: "Toronto, ON",
    period: "August 2023 - September 2024",
    description: [
      "Redesigned websites for small business clients, improving UX/UI and increasing user engagement by 20%, while boosting session duration by 15%",
      "Developed and implemented responsive web layouts optimized for desktop and mobile devices, contributing to a 15% increase in mobile traffic and improving accessibility for a broader audience",
      "Collaborated with developers, streamlining the design-to-development workflow and reducing project turnaround time by 10%",
      "Enhanced website performance, optimizing images and reducing page load times by 30%, resulting in a 12% increase in organic traffic",
      "Created custom visual elements including banners, icons, and graphics using Adobe Creative Suite, improving site aesthetics and receiving positive client feedback",
      "Maintained and updated websites, regularly addressing bugs and implementing new features to ensure a seamless user experience",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional experience delivering measurable results for clients
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2 glow" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 z-10 glow-blue" />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="glass rounded-2xl p-8 hover:glow transition-all relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-gray-300 mb-2">
                            <Briefcase size={16} className="mr-2 text-blue-400" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-300 mb-2">
                            <MapPin size={16} className="mr-2 text-blue-400" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Calendar size={16} className="mr-2 text-blue-400" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="text-purple-400 mr-2">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
