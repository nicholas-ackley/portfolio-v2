import { useEffect, useState } from "react";
import Terminal from "../components/container/Terminal";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [command, setCommand] = useState("");
  const [showExperiences, setShowExperiences] = useState(false);

  const CMD = "$ cat experience.log";

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      setCommand((prev) => prev + CMD.charAt(i));
      i++;
      if (i >= CMD.length) {
        clearInterval(type);
        setTimeout(() => setShowExperiences(true), 500);
      }
    }, 90);
    return () => clearInterval(type);
  }, []);

  const experiences = [
    {
      company: "Traver Companies",
      role: "Full-Stack Developer Intern",
      duration: "Mar 2023 – Aug 2025",
      description: [
        "Developed and deployed full-stack dashboards using React, TypeScript, and Node.js.",
        "Created RESTful APIs for internal analytics tools integrated with SQL databases.",
        "Migrated from a legacy web application to a modern React/Typescript based front end.",
        "Collaborated with senior engineers to implement authentication and data visualization using Recharts.",
      ],
      tech: "React, TypeScript, Node.js, SQL, REST APIs, Figma",
      achievements: [
        "Built and launched a client dashboard accessed by over 200 internal users.",
        "Tools: JIRA, Bitbucket/Git, Figma",
      ],
      featured: true,
      link: "https://traverconnect.com/",
    },
    {
      company: "Hackathon Project 2025",
      role: "Hackathon Project",
      duration: "Oct 2025",
      description: [
        "Developed an NBA analytics dashboard during a 48-hour hackathon.",
      ],
      tech: "Angular, Django, PostgreSQL, REST API, JSON",
      achievements: [
        "Built real-time player performance tracking with interactive graphs.",
      ],
      featured: true,
      link: "https://github.com/your-hackathon-project",
    },
    {
      company: "GreekPop",
      role: "Founder / Developer",
      duration: "2025 – Present",
      description: [
        "Building a Depop-style resale marketplace for Greek apparel.",
        "Developing authentication and listing APIs with Firebase and Expo.",
        "Managing deployment, design, and community onboarding.",
      ],
      tech: "React Native, Firebase, Expo, APIs",
      achievements: [
        "Launching private beta for Texas Greek organizations in Spring 2026.",
      ],
      featured: false,
      link: "https://github.com/nicholas-ackley/greek-pop",
    },
  ];

  return (
    <Terminal>
      <div className="p-8 text-hackerGreen space-y-6">
        {/* Type writer */}
        <p className="whitespace-pre text-hackerGreen">
          {command}
          <span className="animate-blink">_</span>
        </p>

        {/* Cards with fade in animation */}
        <AnimatePresence>
          {showExperiences && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.4 },
                },
              }}
              className="space-y-6 mt-4"
            >
              {experiences.map((exp, i) => (
                <motion.a
                  key={i}
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="block border border-hackerGreen p-6 rounded-md transition-all duration-300 
                             hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-lg text-hackerGreen">
                        @{exp.company.toLowerCase().replace(/\s+/g, "-")}
                      </p>
                      <p className="text-sm text-hackerGreen/70">
                        {exp.role} | {exp.duration}
                      </p>
                    </div>

                    {exp.featured && (
                      <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">
                        ★ FEATURED
                      </span>
                    )}
                  </div>

                  <ul className="list-disc ml-6 mb-3 space-y-1 text-sm">
                    {exp.description.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>

                  <p className="text-sm mb-2">
                    <span className="text-hackerGreen/60">tech stack:</span>{" "}
                    {exp.tech}
                  </p>

                  <div className="mt-3">
                    <p className="text-hackerGreen/60 text-sm">achievements:</p>
                    <ul className="list-disc ml-6 mt-1 space-y-1 text-sm">
                      {exp.achievements.map((a, idx) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Terminal>
  );
};

export default Experience;
