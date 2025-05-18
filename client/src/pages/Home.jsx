import React from 'react';
import { motion } from 'framer-motion';

import Hero from '../components/home/Hero';
import InterestRates from '../components/home/InterestRates';
import Partners from '../components/home/Partners';
import FooterSection from '../components/home/FooterSection';

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
};

const Home = () => {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <InterestRates />
      <Partners />
      <FooterSection />
    </motion.main>
  );
};

export default Home;
