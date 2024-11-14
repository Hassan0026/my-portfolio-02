import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen rounded-full bg-no-repeat bg-[url(/20241114_223108_0000.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
    <Navbar />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-65px] sm:text-[75px] font-bold leading-tight flex justify-center items-center'>
        <div className='text-accent'>
          <p data-aos="zoom-in-up">I&apos;m</p>
          <p data-aos="zoom-in-up">Hassan</p>
          <p data-aos="zoom-in-up">Jamshed</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
