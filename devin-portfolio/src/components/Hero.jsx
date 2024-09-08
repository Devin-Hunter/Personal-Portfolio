import React from 'react'
import { Vortex } from '../components/ui/vortex'

const Hero = () => {
  return (
//     <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
//       <Vortex
//         backgroundColor="black"
//         rangeY={800}
//         particleCount={500}
//         baseHue={120}
//         className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           The hell is this?
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
//           burned and you&apos;ll have a scar.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Order now
//           </button>
//           <button className="px-4 py-2  text-white ">Watch trailer</button>
//         </div>
//       </Vortex>
//     </div>
//   );
// }



    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={400}
        particleCount={150}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <div className="bg-emerald-900 py-5 px-5 justify-items-center">
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Welcome to Devin's portfolio!
            </h2>
            <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              I'm a software engineer and I'm ready for a job
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg
              text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">Let's Chat</button>
              <button className="px-4 py-2  text-white ">Resume</button>
            </div>
          </div>

        </Vortex>

      {/* <div>
      //   <div className="h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.03]
      //   bg-dot-black/[0.2] flex items-center justify-center relative">
      //     <div className="absolute pointer-events-none inset-0 flex items-center
      //     justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      //   </div>
      // </div> */}

      {/* <div className="flex justify-center relative my-20 z-20">
      //   <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center
      //   justify-center">
      //     <h2 className="uppercase tracking-widest text-xs text-center
      //     text-blue-100 max-w-80">
      //       Dynamic portfolio with Next.js
      //     </h2>
      //   </div>
      // </div> */}

    </div>
  )
}

export default Hero
