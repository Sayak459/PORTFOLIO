import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { items } from '../constants';

const Services = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className='border-b border-neutral-900' id='services'>
      <motion.h1 initial={{ y: -10 }}
        animate={{ y: [10, -10] }}
        transition={{
          duration: 1, ease: "linear",
          repeat: Infinity, repeatType: "reverse"
        }}
        className="my-20 text-center text-4xl font-mono ">
        ---My Services---
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 ">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            className="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 text-white shadow-xl rounded-xl p-9 cursor-pointer w-10/12 m-auto transition-all duration-300"
            onClick={() => setSelectedId(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h5 className="text-sm opacity-80">{item.subtitle}</motion.h5>
            <motion.h2 className="text-xl font-semibold">{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="bg-white shadow-2xl rounded-lg p-6 fixed inset-0 m-auto max-w-sm max-h-[50%] w-full h-auto overflow-scroll"
            >
              {items.filter(item => item.id === selectedId).map(selectedItem => (
                <div key={selectedItem.id}>
                  <motion.h5 className="text-sm text-gray-500">{selectedItem.subtitle}</motion.h5>
                  <motion.h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedItem.title}</motion.h2>
                  <motion.p className="text-gray-600 mb-4">
                    {selectedItem.description || "Description not available."}
                  </motion.p>
                  <motion.button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => setSelectedId(null)}
                    whileHover={{ scale: 1.1 }}
                  >
                    Close
                  </motion.button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
