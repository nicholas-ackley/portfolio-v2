import Navbar from "../../navbar/Navbar";

export default function Terminal({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg flex items-center justify-center min-h-screen bg-hackerDark text-hackerGreen font-mono overflow-hidden p-20">
      {/* Outer hacker terminal window */}
      <div className="relative w-[1450px] h-[925px] bg-black/80 border-[2px] border-hackerGreen flex flex-col">
        
        {/* Top thick strip */}
        <div className="h-[26px] w-full bg-hackerGreen"></div>

        {/* Navbar */}
        <Navbar />

        {/* Scrollable inner section */}
        <div className="flex-1 border-t border-hackerGreen overflow-y-scroll scrollbar-thin scrollbar-thumb-hackerGreen scrollbar-track-transparent">
          <div className="p-16 text-hackerGreen">{children}</div>
        </div>
      </div>
    </div>
  );
}
