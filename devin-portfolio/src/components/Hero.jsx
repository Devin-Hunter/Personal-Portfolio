import React from 'react'
import { Vortex } from '../components/ui/vortex'

const Hero = () => {
  return (
    <div className="pb-20">
      <div>
        <Vortex className="top-38 left-80 h-[80vh] w-[50vw]"/>

      </div>

      <div>
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

    </div>
  )
}

export default Hero
