import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Head from 'next/head';
import Counter from '../components/CounterTexts';
import VisibilitySensor from 'react-visibility-sensor';

const Home = () => {
  const [startCounting, setStartCounting] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setStartCounting(true);
    } else {
      setStartCounting(false);
    }
  };
  const countersData = [
    { target: 130, title: 'النشاط' },
    { target: 150, title: 'الهدف' },
    { target: 140, title: 'المنتجات' },
    { target: 170, title: 'المتابعة' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-fit my-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} flex-col`}
      >
        <h1 className="text-center pb-16 sm:pb-28 text-yellow-400 text-[20px]">
          عنواننا التميز{' '}
        </h1>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] sm:text-[32px]  text-center font-extrabold text-white  z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {countersData.map(({ target, title }, index) => (
              <div
                key={index}
                className="text-center px-32 sm:px-6 md:px-7 lg:px-10 xl:px-14 2xl:px-16 py-3 sm:py-6 lg:py-12 border-4 rounded-md w-full min-w-[350px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[190px] mx-auto"
                style={{ borderColor: 'rgb(63 63 70)' }}
              >
                <VisibilitySensor
                  partialVisibility
                  onChange={(isVisible) => {
                    onVisibilityChange(isVisible);
                  }}
                >
                  <Counter target={target} startCounting={startCounting} />
                </VisibilitySensor>
                <h3 className="text-base pt-2 sm:pt-3 lg:pt-2 sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
