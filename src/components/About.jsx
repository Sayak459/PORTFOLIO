import React from 'react'
import aboutimg from '../assets/profile2.jpeg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id='about'>
      <motion.h1 initial={{ y: -10 }}
        animate={{ y: [10, -10] }}
        transition={{
          duration: 1, ease: "linear",
          repeat: Infinity, repeatType: "reverse"
        }}
        className='my-20  text-center text-4xl font-mono' >
        ---About
        <span className='text-cyan-500 '> Me!!!---</span>
      </motion.h1>
      <div className='flex flex-wrap'>
        <motion.div initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }} className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-full w-2/3 mt--1' src={aboutimg} alt='about' />
          </div>
        </motion.div>
        <motion.div initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }} className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-3  max-w-xl py-6 font-semibold font-serif'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About