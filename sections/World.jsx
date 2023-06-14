'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10 md:mb-4 -mb-72`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <h1 className="text-center py-12 text-yellow-400 text-[20px]">
        منتجاتنا عابرة للقارات
      </h1>
      <TitleText
        title={<>أينما كنت بعون الله نصل إليك</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="md:w-full w-[100%] md:h-full h-[30%] object-cover"
        />

        <div className="absolute md:bottom-20 bottom-[460px] md:right-20 right-36 md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute md:bottom-28 bottom-[480px] md:left-36 left-12 md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full ">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute md:bottom-40 bottom-[490px] md:right-32 right-28 md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>

        <div className="absolute  top-24 md:left-40 left-48 md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="/people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute md:top-12 top-28 md:left-28 left-12 md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="/people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>

        <div className="absolute md:top-1/2 top-2 md:left-[49%] left-[40%] md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute md:top-80 top-12 md:left-[43%] left-[34%] md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>

        <div className="absolute top-20 left-[44%] md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute top-7 left-[50%] md:w-[70px] w-[10%] md:h-[70px] h-auto p-[6px] rounded-full ">
          <img
            src="people-05.png"
            alt="people"
            className="w-full h-full rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
