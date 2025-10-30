import { Link, useLocation } from "react-router-dom";
import { Home, Folder, Briefcase, Mail } from "lucide-react";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import { useEffect } from "react";

export default function Navbar() {



  let location = useLocation();

  useEffect(() => {
    console.log("Current location:", location.pathname);
  })



  return (

    <div className="p-9 h-[48px] w-full bg-transparent px-6 flex items-center justify-between border-b border-hackerGreen">
      {/* Left: your name */}
      <span className="text-lg font-bold tracking-wide">NICK</span>

      {/* Right: placeholder for future nav items/icons */}
      <div className="flex items-center gap-8 text-1xl">
        {/* <Link to="/" className="">Testing</Link> */}
        <Link to="/app" className="m-4 h-[24px]" >$ROOT</Link>
        <Link to="/Projects" className="m-4" >Project</Link>
        <Link to="/experience" className="m-4" >Experience</Link>
        <Link to="/Projects" className="m-4" >Contact</Link>




      </div>
    </div>
  );
}
