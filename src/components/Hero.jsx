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
              <span className="font-dancingscript bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)] text-white px-5 py-4 rounded-full">
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
