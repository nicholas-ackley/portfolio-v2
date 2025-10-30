import Navbar from "../navbar/Navbar";

export default function HomePage() {
  return (
    <div className="text-lg flex items-center justify-center min-h-screen bg-hackerDark text-hackerGreen font-mono overflow-hidden">
      {/* Outer hacker terminal window */}
      <div className="relative w-[1450px] h-[925px] bg-black/80 border-[2px] border-hackerGreen flex flex-col">
      
        {/* Top thick strip */}
        <div className="h-[26px] w-full bg-hackerGreen"></div>

        {/* Navbar */}
        <Navbar />

        {/* Scrollable inner section */}
        <div className="flex-1 border-t border-hackerGreen overflow-y-scroll scrollbar-thin scrollbar-thumb-hackerGreen scrollbar-track-transparent">
          
          {/* Main content */}
          <div className="p-16 text-hackerGreen">
            {/* whoami */}
            <p className="mb-2">$ whoami</p>
            <p className="indent-8 mb-6">Nicholas Ackley - Software Engineer</p>

            {/* pwd */}
            <p className="mb-2">$ pwd</p>
            <p className="indent-8 mb-6">/building/innovative/projects</p>

            {/* skills */}
            <p className="mb-2">$ ls skills/</p>
            <p className="indent-8 mb-6">/TypeScript /React /Python /FastAPI /Rust /SQL /MongoDB</p>

            {/* current.status */}
            <p className="mb-2">$ cat current.status</p>
            <div className="indent-8 mb-6 space-y-1">
              <p>Location: Dallas, TX</p>
              <p>Currently: Building projects and expanding my portfolio</p>
              <p>
                Side-Project: Building{" "}
                <span className="text-hackerGreen/80">GreekPop</span>
              </p>
            </div>

            {/* resume */}
            <p className="mb-2">$ wget resume</p>
            <a
              href="#"
              className="indent-8 underline text-hackerGreen hover:text-hackerGreen/70"
            >
              nicholasackley.pdf
            </a>

            {/* filler for scroll */}
            <div className="h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
