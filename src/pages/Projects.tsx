import { useEffect, useState } from "react";
import Terminal from "../components/container/Terminal";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [command, setCommand] = useState("");
  const [showProjects, setShowProjects] = useState(false);

  const CMD = "> npm search @nicholas/* --detail";

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      setCommand((prev) => prev + CMD.charAt(i));
      i++;
      if (i >= CMD.length) {
        clearInterval(type);
        setTimeout(() => setShowProjects(true), 500);
      }
    }, 80);
    return () => clearInterval(type);
  }, []);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      name: "@nick/greekpop",
      description: "College Resale Marketplace for Greek life apparel.",
      activity: 35,
      lastActivity: "2 days ago",
      github: "github.com/nickackley/GreekPop",
      featured: true,
      details: {
        topics: "React Native, Firebase, TypeScript",
        language: "TypeScript",
        issues: 3,
        created: "4 months ago",
        clone: "github.com/nickackley/GreekPop.git",
        homepage: "greekpop.app",
      },
    },
    {
      name: "@nick/spotify-summary",
      description: "Spotify dashboard showing top songs and listening stats.",
      activity: 80,
      lastActivity: "1 week ago",
      github: "github.com/nickackley/SpotifySummary",
      featured: false,
      details: {
        topics: "React, Node.js, Spotify API",
        language: "JavaScript",
        issues: 1,
        created: "6 months ago",
        clone: "github.com/nickackley/SpotifySummary.git",
        homepage: "spotifywrappedv2.app",
      },
    },
    {
      name: "@nick/okc-thunder-analytics",
      description: "NBA data analysis dashboard for player performance.",
      activity: 85,
      lastActivity: "5 days ago",
      github: "github.com/nickackley/OKC-Thunder-Analytics",
      featured: true,
      details: {
        topics: "Angular, Django, PostgreSQL",
        language: "Python / TypeScript",
        issues: 2,
        created: "3 months ago",
        clone: "github.com/nickackley/OKC-Thunder-Analytics.git",
        homepage: "okc-analytics.dev",
      },
    },
    {
      name: "@nick/web-portfolio-v1",
      description: "My first personal web portfolio showcasing projects and skills.",
      activity: 100,
      lastActivity: "Just now",
      github: "https://github.com/nicholas-ackley/website",
      featured: false,
      details: {
        topics: "React, TypeScript, TailwindCSS, Framer Motion",
        language: "TypeScript",
        issues: 0,
        created: "1 month ago",
        clone: "github.com/nickackley/web-portfolio-v1.git",
        homepage: "https://nicholas-ackley.github.io/website/",
      },
    },
  ];

  return (
    <Terminal>
      <div className="space-y-6">
        {/* Typing animation for npm command */}
        <p className="whitespace-pre text-hackerGreen">
          {command}
          <span className="animate-blink">_</span>
        </p>

        {/* Fade-in project boxes after typing is done */}
        <AnimatePresence>
          {showProjects && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.4, // delay between each project fade-in
                  },
                },
              }}
              className="space-y-6"
            >
              {projects.map((proj, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={i}
                    layout
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className={`relative border border-hackerGreen p-6 rounded-md cursor-pointer 
                      transition-all duration-300 hover:border-white 
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-[1.02]`}
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-hackerGreen font-semibold mb-1">
                          {proj.name}
                        </p>
                        <p className="text-sm text-hackerGreen/80">
                          {proj.description}
                        </p>
                      </div>
                      {proj.featured && (
                        <span className="border border-yellow-400 text-yellow-400 text-xs px-2 py-1 rounded">
                          ★ FEATURED
                        </span>
                      )}
                    </div>

                    {/* Activity */}
                    <div className="mt-4 text-sm space-y-1">
                      <p>
                        activity:{" "}
                        <span className="inline-block w-32 h-[8px] bg-gray-800 border border-hackerGreen/40 align-middle mx-2">
                          <span
                            className="block h-full bg-hackerGreen transition-all duration-700"
                            style={{ width: `${proj.activity}%` }}
                          ></span>
                        </span>
                        {proj.activity}%
                      </p>
                      <p className="text-hackerGreen/70">
                        last activity: {proj.lastActivity}
                      </p>
                      <p>
                        github:{" "}
                        <a
                          href={`https://${proj.github}`}
                          target="_blank"
                          className="underline hover:text-white transition"
                        >
                          {proj.github}
                        </a>
                      </p>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 border-t border-hackerGreen/30 pt-3 text-sm space-y-1 overflow-hidden"
                        >
                          <p>topics: {proj.details.topics}</p>
                          <p>primary language: {proj.details.language}</p>
                          <p>open issues: {proj.details.issues}</p>
                          <p>created: {proj.details.created}</p>
                          <p>
                            clone:{" "}
                            <span className="text-hackerGreen/70">
                              {proj.details.clone}
                            </span>
                          </p>
                          <p>
                            homepage:{" "}
<a
  href={
    proj.details.homepage.startsWith("http")
      ? proj.details.homepage
      : `https://${proj.details.homepage}`
  }
  target="_blank"
  rel="noopener noreferrer"
  className="underline hover:text-white"
>
  {proj.details.homepage.replace(/^https?:\/\//, "")}
</a>

                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Terminal>
  );
};

export default Projects;
