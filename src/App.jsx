import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Techstack from './components/Techstack';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from 'react-scroll-to-top';
import Services from './components/Services';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${isDarkMode ? 'text-neutral-300' : 'bg-white text-neutral-900'} overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900`}>
      {/* Background Gradient */}
      <div className={`fixed top-0 -z-10 h-full w-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: '#1e1e2c' }} />

      {/* Container */}
      <div className='container mx-auto px-8'>
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <Techstack />
        <Services />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
