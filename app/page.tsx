'use client';

import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Loader from './components/Loader'
import { motion } from 'framer-motion';
import { h1 } from 'framer-motion/client';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading time
  }, []);

  return (
    <div 
      style={{
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative'
      }}
    >
      {loading ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome
        </motion.h1>
      )}
    </div>
  );
};

export default HomePage;
