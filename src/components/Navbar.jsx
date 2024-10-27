import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='mb-20 flex flex-col md:flex-row items-center justify-between py-4 px-4'>
            <div className='flex flex-shrink-0 items-center'>
                {/* Logo can be added here */}
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden" onClick={toggleMenu}>
                {isOpen ? <FaTimes className="text-2xl cursor-pointer" /> : <FaBars className="text-2xl cursor-pointer" />}
            </div>

            {/* Links - show/hide on mobile based on isOpen state */}
            <div className={`flex-col md:flex-row md:flex items-center justify-center ml-36 gap-14 text-2xl ${isOpen ? 'flex' : 'hidden'} ${isDarkMode ? '' : 'font-semibold'} md:flex`}>
                <Link to="home" smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="about" smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>About</Link>
                <Link to="techstack" smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>Skills</Link>
                <Link to="services" smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>Services</Link>
                <Link to='education' smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>Education</Link>
                <Link to='projects' smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>Projects</Link>
                <Link to="contact" smooth={true} className='font-thin cursor-pointer hover:underline hover:scale-105 transform transition-all duration-200' onClick={() => setIsOpen(false)}>Contact</Link>
            </div>

            {/* Theme Toggle Switch with Icons */}
            <div className="mr-4 flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-cyan-500 transition-all duration-500 ease-in-out flex items-center justify-center">
                        {isDarkMode ? (
                            <FaSun className="text-yellow-400 text-lg absolute left-1 transition-opacity duration-500 ease-in-out" />
                        ) : (
                            <FaMoon className="text-gray-800 text-lg absolute right-1 transition-opacity duration-500 ease-in-out" />
                        )}
                        <div
                            className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-500 ease-in-out ${
                                isDarkMode ? 'translate-x-full bg-yellow-400' : ''
                            }`}
                        />
                    </div>
                </label>
            </div>

            {/* Social icons */}
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href='https://www.linkedin.com/in/sayak459-20535a26a/' target='_blank' rel='noopener noreferrer' className="hover:underline hover:scale-105 transform transition-all duration-200">
                    <FaLinkedin />
                </a>
                <a href='https://github.com/Sayak459' target='_blank' rel='noopener noreferrer' className="hover:underline hover:scale-105 transform transition-all duration-200">
                    <FaGithub />
                </a>
                <a href='https://www.instagram.com/the_roni_da/' target='_blank' rel='noopener noreferrer' className="hover:underline hover:scale-105 transform transition-all duration-200">
                    <FaInstagram />
                </a>
                <a href='https://x.com/SayakHajra459' target='_blank' rel='noopener noreferrer' className="hover:underline hover:scale-105 transform transition-all duration-200">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
