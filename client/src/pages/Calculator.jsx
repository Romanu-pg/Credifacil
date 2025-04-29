import React from 'react';

import { motion } from 'framer-motion';

import Calculate from "../components/calculator/calc2";


const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: .3 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const Calculator = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col min-h-screen"  // Flex column y min-h-screen para ocupar todo el alto
    >
      {/* Contenedor para el contenido, que se expandirá para ocupar todo el espacio disponible */}
      <div className='flex-1 py-10'>
        <div className='w-[85vw] flex mx-auto h-full'>
          <Calculate />
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator;
