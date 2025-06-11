import React from "react";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoadingPage from "./components/LoadingPage";


const App = () => {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 1,
      repeat: 1,
      yoyo: true,
      delay: 0.5,
      stagger: {
        amount: 1.5,
        from: "start",
        grid: [3, 3],
      },
    });
    tl.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    });
    tl.to(".wrapper", {
      opacity: 0,
      display: "none",
    });
  });
  return (
    <>
      <LoadingPage/>
      <div
       className="font-poppins bg-[#f0f4ff]">
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
