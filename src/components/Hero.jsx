import React from 'react'
import Typewriter from 'typewriter-effect'
import propilepic from "../assets/profile.jpeg"
import CV from '../assets/SayakResume.pdf'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35' id='home'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h2
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1}}
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl '>
                            Hello,I'm SAYAK
                        </motion.h2>
                        <motion.span
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                            className='bg-gradient-to-r from-yellow-300 via-red-500 to-green-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            <Typewriter
                                options={{
                                    strings: ['Mern Developer!',
                                        'Full Stack Developer!',
                                        'Java Enthusiast!',
                                        'Competetive Coder!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </motion.span>
                        <div className='mt-32'>
                            <button className='bg-blue-500 hover:bg-red-700 text-black font-bold font-mono py-2 px-4 rounded-xl'>
                                Hire Me 👉
                            </button>
                            <a className=' ml-4 bg-green-500 hover:bg-pink-700 text-black font-bold font-mono py-2 px-4 rounded-full' href={CV} download="CV.pdf">
                                Download Resume ⬇
                            </a>
                        </div>
                    </div>
                </div>
                <motion.div initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img className='rounded-full' src={propilepic} alt='pic' />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero