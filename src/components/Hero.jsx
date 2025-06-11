import { motion } from 'framer-motion'
import React from 'react'
import { FaDownload } from 'react-icons/fa'


const Hero = () => {
  return (
    <motion.div
    initial={{y:25,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:1,ease:"easeInOut"}}
    >
      <div className='flex items-center p-7 justify-between'>
        <h1 className='font-bold text-2xl sm:text-3xl'>ayush.</h1>
        <button>Menu</button>
      </div>

      <div className='text-center'>
        <div className="text-center">
          <h1 className="text-purple-400 font-dancingscript font-bold text-center text-7xl sm:text-[150px] mt-18 sm:mt-32">
            hello
          </h1>

          <div className="max-w-[90%] sm:max-w-[600px] mx-auto">
            <h1 className="text-gray-600 text-xl sm:text-4xl font-bold mx-10 mt-12 mb-2 leading-relaxed">
              I'm{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)] text-white px-3 py-2 rounded-full">
                Ayush
              </span>
              , a{" "}
              <span className="relative inline-block">
                fullstack
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-500 animate-underline"></span>
              </span>{" "}
              developer and{" "}
              <span className="relative inline-block">
                AI
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-purple-500 animate-underline"></span>
              </span>{" "}
              enthusiast
            </h1>
            <p className='text-gray-400 sm:text-3xl'>
              I love solving problems and innovating new things. Technology
              inspires me, and I am always excited to learn and grow in this
              field.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12 mt-5">
         <a href="/ayush_resume.pdf" rel="noopener noreferrer">
           <button className="flex gap-2 items-center text-white bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 px-3 py-2 rounded-full shadow-lg hover:scale-105 transition">
  Resume <FaDownload className="text-white" />
</button>
         </a>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero

// import { Download } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { CiMenuFries } from "react-icons/ci";
// import Menu from "./HamburgerMenu"
// import HamburgerMenu from "./HamburgerMenu";
// import { px } from "framer-motion";

// const Hero = () => {
//   const[value,setValue] = useState(false);
//     const handleClick = () =>{
//       setValue(!value)
      
//     }
//   useEffect(() => {
//     gsap.fromTo(
//       ".underline-animate",
//       { width: 0 },
//       {
//         width: "100%",
//         duration: 2,
//         ease: "power2.out",
//         delay: 1,
//       }
//     );
//   }, []);

//   return (
//     <div className="h-screen bg-gradient-to-br from-slate-100 to-slate-300 relative">
//       {/* Header */}
//       <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
//         <h1 className="font-bold text-3xl text-black">ayush.</h1>
//         <button className="flex shadow-2xl items-center gap-2 text-lg p-4 bg-amber-300 rounded-full"><HamburgerMenu size={2} value={value} handleClick={handleClick} />Menu
// </button>
//       </div>

//       {/* Hero Content */}
//       <div className="h-full flex items-center justify-center">
//         <div className="text-center max-w-4xl p-4">
//           <h1 className="font-dancingscript text-9xl font-extrabold text-black">
//             hello .
//           </h1>

//           <h3 className="text-4xl pt-8 font-bold text-black">
//             I'm{" "}
//             <span className="relative font-dancingscript bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-md shadow-lg drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">
//               Ayush
//             </span>
//           </h3>

//           <div className="relative inline-block mt-2">
//             <span className="font-bold text-4xl text-black">
//               a fullstack developer and AI enthusiast
//             </span>
//             <div className="absolute bottom-0 left-0 h-[3px] bg-yellow-400 rounded-full underline-animate"></div>
//           </div>

//           <p className="mt-6 text-2xl text-black leading-relaxed px-4">
//             I enjoy solving real-world problems, building innovative
//             applications, and continuously learning in the field of technology.
//           </p>

//           <div className="mt-8 flex justify-center">
//             <a
//               href="/ayush_resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="flex gap-2 items-center bg-gradient-to-r from-pink-400 to-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
//                 Resume <Download />
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
