import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current location:", location.pathname);
  }, [location]);

  return (
    <div className="p-9 h-[48px] w-full bg-transparent px-6 flex items-center justify-between border-b">
      {/* Left: name + blinking red dot */}
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-red-800 animate-pulse"></span>
        <span className="text-lg font-bold tracking-wide">NICK</span>
      </div>

      {/* Right: navigation links */}
      <div className="flex items-center gap-6 text-1xl">
        {[
          { to: "/", label: (<><span className="text-red-500">$</span>ROOT</>) },
          { to: "/projects", label: "Projects" },
          { to: "/experience", label: "Experience" },
          { to: "/contact", label: "Contact" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="px-4 py-2 transition duration-200 
                       hover:bg-white hover:text-black m-6"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
