import React from 'react'
import LoadingPage from "./LoadingPage"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const Loader = () => {
    useGSAP(()=>{
        let tl = gsap.timeline();

        tl.to(".box",{
            scale:0,
            y:60,
            rotate:400,
            duration :1,
            repeat:1,
            yoyo:true,
            delay: 0.5,
            stagger:{
                amount:1.5,
                from:"start",
                grid: [3,3],
            }
        });
        tl.to(".container",{
            rotate: "-405deg",
            scale:0,
            duration:1,
        })
        tl.to(".wrapper",{
            opacity:0,
            display:"none",
        })
         })
  return (
   <>
    <LoadingPage/>
    <div className='h-screen flex items-center justify-center bg-black'>
        <h1 className='text-white text-8xl font-bold'>Hello</h1>
    </div>
   </>
  )
}

export default Loader