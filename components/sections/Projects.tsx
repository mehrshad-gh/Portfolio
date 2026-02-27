"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Smartphone, CheckCircle, Monitor } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Update this when VanKirk domain changes
const VANKIRK_LIVE_URL = "https://www.vankirkdevelopment.ca";

const projects = [
  {
    title: "PropDesk",
    description:
      "Property management application for property owners and real estate professionals. Features property tracking, tenant management, document organization, service records, and team collaboration with enterprise-grade security including mandatory 2FA and biometric authentication. Currently available on iOS, with desktop version in development.",
    technologies: ["React Native", "Expo", "Node.js", "Express.js", "PostgreSQL", "JWT", "Railway", "EAS"],
    appStore: "https://apps.apple.com/ca/app/propdesk/id6756508686",
    featured: true,
    image: "/images/propdesk.png",
  },
  {
    title: "HookMeUp",
    description:
      "Community-driven mobile app for discovering and reviewing products and services based on honest feedback from a global community. Features real user reviews, star ratings, business discovery, appointment booking, QR code redemption, and premium membership options. Available on both iOS and Android platforms.",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    appStore: "https://apps.apple.com/ca/app/hook-me-up/id6529521263",
    playStore: "https://play.google.com/store/apps/details?id=com.app.hookmeup&pcampaignid=web_share",
    live: "https://hookmeupworld.com",
    featured: true,
    image: "/images/hookmeup.png",
  },
  {
    title: "VanKirk Property Development",
    description:
      "Property development website for VanKirk Property Development showcasing pre-construction condominium projects in Whitby, Ontario. Features project showcases, registration system, and modern design highlighting luxury developments with 158 thoughtfully designed units.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: VANKIRK_LIVE_URL,
    featured: true,
    image: "/images/vankirk.png",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real applications I've built and shipped to production
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const ProjectImage = ({ imagePath, alt }: { imagePath: string; alt: string }) => {
              const [imageError, setImageError] = useState(false);
              
              if (imageError) return null;
              
              return (
                <div className="w-full md:w-2/5 aspect-[3/2] flex-shrink-0 relative overflow-hidden bg-slate-800 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none border-r border-slate-700/50 group/image">
                  <Image
                    src={imagePath}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center group-hover/image:scale-110 transition-transform duration-500"
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 group-hover/image:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
              );
            };
            
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass rounded-2xl overflow-hidden hover:glow transition-all group relative hover-lift ${
                project.featured ? "border-2 border-blue-500/50 glow-blue animated-border" : ""
              }`}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col md:flex-row">
                {project.image && <ProjectImage imagePath={project.image} alt={project.title} />}
                <div className={`p-6 md:p-7 ${project.image ? 'md:w-3/5' : 'w-full'} flex flex-col justify-between relative z-10`}>
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:gradient-text transition-all">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full glow">
                              <CheckCircle size={12} />
                              <span>Live</span>
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="inline-flex items-center px-2 py-1 bg-slate-700/60 text-gray-200 text-xs font-medium rounded border border-slate-600/50 backdrop-blur-sm">
                            {project.title === "PropDesk" || project.title === "HookMeUp" ? "Mobile App" : "Web Application"}
                          </span>
                          {project.title === "PropDesk" && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white text-xs font-semibold rounded shadow-md">
                              <Monitor size={12} />
                              <span>Desktop Version in Development</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs font-medium mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-800/60 text-gray-300 text-xs rounded border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/60 hover:border-blue-500/50 hover:text-blue-300 transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    {project.appStore && (
                      <motion.a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all font-medium text-sm overflow-hidden"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          <Smartphone size={16} />
                          <span>App Store</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                    {project.playStore && project.playStore !== "#" && (
                      <motion.a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all font-medium text-sm overflow-hidden"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          <Smartphone size={16} />
                          <span>Google Play</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all font-medium text-sm overflow-hidden"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          <ExternalLink size={16} />
                          <span>Live Website</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
