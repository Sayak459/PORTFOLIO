import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'


const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4' id='projects'>
            <motion.h1 initial={{ y: -10 }}
                animate={{ y: [10, -10] }}
                transition={{
                    duration: 1, ease: "linear",
                    repeat: Infinity, repeatType: "reverse"
                }}
                className='my-20 text-center text-4xl font-mono'>---Projects---</motion.h1>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <motion.img whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{
                                scale: 0.8,
                                rotate: -90,
                                borderRadius: "100%"
                            }} src={project.image} width={150} height={150}
                            alt={project.title} className='mb-6 rounded' />
                    </div>
                    <motion.div initial={{x:100,opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5,delay:1}} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-500'>
                                {tech}
                            </span>
                        ))}
                        <p className='mb-4 p-2 text-pink-400'>{project.link}</p>
                    </motion.div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects