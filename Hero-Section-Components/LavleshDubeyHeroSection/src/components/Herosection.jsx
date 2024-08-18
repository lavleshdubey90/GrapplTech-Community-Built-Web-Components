import React from 'react';
import heroImage from "../assets/hero-image.png";

const Herosection = () => {
  return (
    <section className='max-w-[1740px] h-full flex flex-col md:flex-row relative flex-1 justify-between mx-auto'>
      <div className='max-w-screen-md pt-10 md:pt-40 space-y-8 md:space-y-16 ml-0 md:ml-5 z-10 px-2 py-2'>
        <h1 className='text-3xl sm:text-4xl leading-[45px] sm:leading-[55px] lg:text-5xl lg:leading-[70px] xl:text-7xl font-bold  xl:leading-[100px]'>Innovating the future <br className='hidden md:block'/> of VR technology</h1>
        <p className='font-medium text-sm md:text-base md:max-w-[400px] lg:max-w-[500px] xl:max-w-[560px] leading-6 md:leading-8'>Discover a new dimension of learning with our cutting-edge VR headsets. Join us in redefining the digital landscape with immersive, transformative experiences.</p>
        <button className='btn font-semibold'>Explore Now</button>
      </div>

      <div>
        <div className='md:absolute bottom-0 md:-right-96 lg:-right-80 min-[1440px]:-right-400'>
          <img src={heroImage} alt="person" className='min-w-[600px] md:max-w-[900px] xl:min-w-[950px] xl:max-w-[950px]' />
        </div>
      </div>
    </section>
  )
}

export default Herosection;