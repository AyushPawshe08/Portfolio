import { Download } from "lucide-react";
import React, { useEffect } from "react";
import gsap from "gsap";
import { CiMenuFries } from "react-icons/ci";

const Herotemp = () => {
  useEffect(() => {
    gsap.fromTo(
      ".underline-animate",
      { width: 0 },
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-100 to-slate-300 relative">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
        <h1 className="font-bold text-3xl text-black">ayush.</h1>
        <button className="flex bg-black text-white px-4 py-2 gap-2 rounded-full items-center hover:scale-105 transition">
          Menu
          <CiMenuFries size={20} />
        </button>
      </div>

      {/* Hero Content */}
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-4xl p-4">
          <h1 className="font-dancingscript text-9xl font-extrabold text-black">
            hello .
          </h1>

          <h3 className="text-4xl pt-8 font-bold text-black">
            I'm{" "}
            <span className="relative font-dancingscript bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-md shadow-lg drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">
              Ayush
            </span>
          </h3>

          <div className="relative inline-block mt-2">
            <span className="font-bold text-4xl text-black">
              a fullstack developer and AI enthusiast
            </span>
            <div className="absolute bottom-0 left-0 h-[3px] bg-yellow-400 rounded-full underline-animate"></div>
          </div>

          <p className="mt-6 text-2xl text-black leading-relaxed px-4">
            I enjoy solving real-world problems, building innovative
            applications, and continuously learning in the field of technology.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/ayush_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 items-center bg-gradient-to-r from-pink-400 to-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
                Resume <Download />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herotemp;
