"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

const aboutPoints = [
  {
    icon: User,
    title: "Web & Mobile Developer",
    description: "Building mobile apps with React Native and web applications with Next.js and React. Focused on shipping production-ready software.",
  },
  {
    icon: Target,
    title: "Real Products",
    description: "PropDesk and HookMeUp are live on the App Store. VanKirk Property Development website is in production. These aren't demos—they're real applications used by real users.",
  },
  {
    icon: Lightbulb,
    title: "Professional Experience",
    description: "Worked at WEBRUN Group Inc. developing responsive websites, optimizing performance, and improving UX/UI for client projects with measurable results.",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />

          {/* Optional Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1.5 relative overflow-hidden glow-blue">
              <div className="w-full h-full rounded-full bg-slate-900 relative overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Mehrshad Ghasemi"
                  fill
                  className="object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm a dedicated professional who builds and ships real applications. I've developed mobile apps available on the App Store and Google Play, built production web applications, and worked on client projects that deliver measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover:glow transition-all group relative overflow-hidden hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg glow-blue"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <point.icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-strong rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 gradient-text">My Work & Impact</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              During my year as a Web Developer at WEBRUN Group Inc. in Toronto (August 2023 - September 2024), I redesigned client websites, improving UX/UI and increasing user engagement by 20%, while boosting session duration by 15%. I developed responsive layouts, contributing to a 15% increase in mobile traffic and enhancing accessibility. My collaboration with other developers streamlined workflows, reducing project turnaround time by 10%. I also enhanced website performance by optimizing images and reducing page load times by 30%, resulting in a 12% increase in organic traffic.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond client work, I've independently built and shipped two mobile applications, PropDesk and HookMeUp, available on the App Store and Google Play. PropDesk, a comprehensive property management solution, was taken from concept to a live application with enterprise-grade security features. HookMeUp is a community-driven review platform available on both major app stores. I also developed the VanKirk Property Development website, showcasing pre-construction condominium projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
