'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './components/Loader';
import { Typewriter } from 'react-simple-typewriter';

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {loading ? (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Loader />
          </motion.div>
        </div>
      ) : (
        <div
          style={{
            scrollSnapType: 'y mandatory',
            overflowY: 'scroll',
            height: '100vh',
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              scrollSnapAlign: 'start',
              textAlign: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              <Typewriter
                words={['Welcome, Anandela Titis Panggraito']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
              />
            </motion.div>
            <motion.img
              src="/images/hero-image.jpg" // Replace with your image path
              alt="Hero"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                marginTop: '20px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* About Section */}
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              scrollSnapAlign: 'start',
              textAlign: 'center',
              backgroundColor: '#e0e0e0',
              padding: '0 20px',
            }}
          >
            <motion.img
              src="https://img.freepik.com/premium-vector/skills-concept-education-training-improvement-people-get-knowledge-build-career-illustration_277904-4760.jpg" // Replace with your image path
              alt="About"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                width: '40%',
                height: 'auto',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ width: '50%' }}
            >
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>About Me</h1>
              <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                I am Anandela Titis Panggraito, a passionate developer eager to
                create amazing projects.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row-reverse',
              scrollSnapAlign: 'start',
              textAlign: 'center',
              backgroundColor: '#d0d0d0',
              padding: '0 20px',
            }}
          >
            <motion.img
              src="https://img.freepik.com/free-photo/hands-working-digital-device-network-graphic-overlay_53876-132150.jpg" // Replace with your image path
              alt="Skills"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                width: '40%',
                height: 'auto',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ width: '50%' }}
            >
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Skills</h1>
              <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                I specialize in React, JavaScript, TypeScript, and modern web
                development tools.
              </p>
            </motion.div>
          </div>

          {/* Education Section */}
<div
  style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    scrollSnapAlign: 'start',
    textAlign: 'center',
    backgroundColor: '#c8c8c8',
    padding: '0 20px',
  }}
>
  <motion.img
    src="https://img.freepik.com/premium-vector/education-study-concept-illustration_277904-13231.jpg" // Replace with your image path
    alt="Education"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    style={{
      width: '40%',
      height: 'auto',
      borderRadius: '20px',
      objectFit: 'cover',
    }}
  />
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    style={{ width: '50%' }}
  >
    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Education</h1>
    <div style={{ fontSize: '1.2rem', marginTop: '10px', textAlign: 'left' }}>
      <p>
        <strong>SMA:</strong> SMA Negeri 1 Yogyakarta (2015 - 2018)
      </p>
      <p>
        <strong>S1:</strong> Universitas Gadjah Mada, Bachelor of Computer Science (2018 - 2022)
      </p>
    </div>
  </motion.div>
</div>


          {/* Contact Section */}
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              scrollSnapAlign: 'start',
              textAlign: 'center',
              backgroundColor: '#c0c0c0',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
            >
              Contact Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ fontSize: '1.2rem', marginTop: '10px' }}
            >
              Feel free to reach out at anandela@example.com or connect via
              LinkedIn.
            </motion.p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
