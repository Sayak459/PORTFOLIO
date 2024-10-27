import React from 'react'
import { RiReactjsLine, RiJavaFill } from 'react-icons/ri'
import { BsFiletypeHtml, BsFiletypeCss, BsBootstrap } from "react-icons/bs";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { FaCentSign } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiGithub, SiExpress } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { motion } from 'framer-motion'

const Techstack = () => {
    return (
        <div className='p-3 border-b border-neutral-900' id='techstack'>
            <motion.h1 initial={{ y: -10 }}
                animate={{ y: [10, -10] }}
                transition={{
                    duration: 1, ease: "linear",
                    repeat: Infinity, repeatType: "reverse"
                }}
                className='my-20 text-center text-4xl font-mono'>
                ----Technologies!!!----
            </motion.h1>
            <div>
                <motion.h2 initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='my-7  text-center text-2xl text-decoration-line: underline font-bold  text-orange-500'>
                    Languages
                </motion.h2>
                <motion.div initial={{ y: -10 }}
                    animate={{ y: [10, -10] }}
                    transition={{
                        duration: 1, ease: "linear",
                        repeat: Infinity, repeatType: "reverse"
                    }}
                    className='flex flex-wrap items-center justify-center gap-10'>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <RiJavaFill className='text-5xl text-red-400' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <FaCentSign className='text-5xl text-blue-400' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <FaPython className='text-5xl text-yellow-400' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <AiOutlineJavaScript className='text-5xl text-black-400' />
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.h2 initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }} className='my-7 text-center font-bold text-2xl text-decoration-line: underline text-cyan-500'>
                    Full stack
                </motion.h2>
                <motion.div initial={{ y: -10 }}
                    animate={{ y: [10, -10] }}
                    transition={{
                        duration: 0.6, ease: "linear",
                        repeat: Infinity, repeatType: "reverse"
                    }}
                    className='flex flex-wrap items-center justify-center gap-10'>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <BsFiletypeHtml className='text-5xl text-orange-400' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <BsFiletypeCss className='text-5xl text-blue-800' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <FaNodeJs className='text-5xl text-green-600' />
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.h2 initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }} className='my-7 text-center text-2xl text-decoration-line: underline font-bold text-yellow-500'>
                    FrameWorks
                </motion.h2>
                <motion.div initial={{ y: -10 }}
                    animate={{ y: [10, -10] }}
                    transition={{
                        duration: 2, ease: "linear",
                        repeat: Infinity, repeatType: "reverse"
                    }}
                    className='flex flex-wrap items-center justify-center gap-10'>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <BsBootstrap className='text-5xl text-violet-700' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-5xl text-cyan-400' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <SiExpress className='text-5xl text-black-800' />
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.h2 initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }} className='my-7 text-center text-2xl text-decoration-line: underline font-bold text-pink-500'>
                    Database
                </motion.h2>
                <motion.div initial={{ y: -10 }}
                    animate={{ y: [10, -10] }}
                    transition={{
                        duration: 1, ease: "linear",
                        repeat: Infinity, repeatType: "reverse"
                    }}
                    className='flex flex-wrap items-center justify-center gap-10'>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <SiMysql className='text-5xl text-blue-900' />
                    </div>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <SiMongodb className='text-5xl text-green-400' />
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.h2 initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }} className='my-7 text-center text-2xl text-decoration-line: underline font-bold text-red-500'>
                    Version control
                </motion.h2>
                <motion.div initial={{ y: -10 }}
                    animate={{ y: [10, -10] }}
                    transition={{
                        duration: 2, ease: "linear",
                        repeat: Infinity, repeatType: "reverse"
                    }}
                    className='flex flex-wrap items-center justify-center gap-10'>
                    <div className='rounded-2xl border-2 border-neutral-800 p-4'>
                        <SiGithub className='text-5xl ' />
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Techstack