import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

export default function HomePage() {
  const [whoamiText, setWhoamiText] = useState("");
  const [nameVisible, setNameVisible] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [statusVisible, setStatusVisible] = useState(false);
  const [resumeVisible, setResumeVisible] = useState(false);

  const WHOAMI_CMD = "$ whoami";
  const NAME_LINE = "Nicholas Ackley - Software Engineer";

  useEffect(() => {
    let i = 0;
    const typeCmd = setInterval(() => {
      setWhoamiText((prev) => prev + WHOAMI_CMD.charAt(i));
      i++;
      if (i >= WHOAMI_CMD.length) {
        clearInterval(typeCmd);

        //reveal sequence
        setTimeout(() => setNameVisible(true), 500);    
        setTimeout(() => setPwdVisible(true), 700);     
        setTimeout(() => setSkillsVisible(true), 1000); 
        setTimeout(() => setStatusVisible(true), 1500); 
        setTimeout(() => setResumeVisible(true), 1900); 
      }
    }, 100);

    return () => clearInterval(typeCmd);
  }, []);

  return (
    <div className="text-lg flex items-center justify-center min-h-screen bg-hackerDark text-hackerGreen font-mono overflow-hidden">
      {/* Outer hacker terminal window */}
      <div className="relative w-[1450px] h-[925px] bg-black/80 border-[2px] border-hackerGreen flex flex-col">

        {/* Top strip */}
        <div className="h-[26px] w-full bg-hackerGreen"></div>

        <Navbar />

        {/* Terminal Content */}
        <div className="flex-1 border-t border-hackerGreen overflow-y-scroll scrollbar-thin scrollbar-thumb-hackerGreen scrollbar-track-transparent">
          <div className="p-16 text-hackerGreen space-y-6">
            
            {/* whoami typing animation */}
            <p className="mb-2 whitespace-pre">
              {whoamiText}
              <span className="animate-blink">_</span>
            </p>

            {/* Sequential Fade-Ins */}
            {nameVisible && (
              <p className="indent-8 mb-6 animate-fadeIn text-hackerGreen/90">
                {NAME_LINE}
              </p>
            )}

            {pwdVisible && (
              <div className="animate-fadeIn">
                <p className="mb-2">$ pwd</p>
                <p className="indent-8 mb-6">/building/innovative/projects</p>
              </div>
            )}

            {skillsVisible && (
              <div className="animate-fadeIn">
                <p className="mb-2">$ ls skills/</p>
                <p className="indent-8 mb-6">
                  /TypeScript /React /Python /FastAPI /Java /SQL /MongoDB
                </p>
              </div>
            )}

            {statusVisible && (
              <div className="animate-fadeIn">
                <p className="mb-2">$ cat current.status</p>
                <div className="indent-8 mb-6 space-y-1">
                  <p>Location: Dallas, TX</p>
                  <p>Currently: Building projects and expanding my portfolio</p>
                  <p>Studies - University of Texas at Dallas</p>
                  <p>
                    Side-Project: Building{" "}
                    <span className="text-hackerGreen/80">GreekPop</span>
                  </p>
                </div>
              </div>
            )}

            {resumeVisible && (
              <div className="animate-fadeIn">
                <p className="mb-2">$ wget resume</p>
                <a
                  href="#"
                  className="indent-8 underline text-hackerGreen hover:text-hackerGreen/70"
                >
                  nicholasackley.pdf
                </a>
              </div>
            )}

            <div className="h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
