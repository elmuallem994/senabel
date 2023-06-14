'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section
    id="about-section"
    className={`${styles.paddings} relative z-10`}
    dir="rtl"
  >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <h1 className=" text-center py-12 text-yellow-400 text-[20px] direction-rtl">
        {' '}
        نبذة عن الشركة
      </h1>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[18px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white block pb-2">
          مجموعة سنابل التجارية
        </span>
        منذ ثلاثين عاماً انطلقت وفي دمشق الشام كانت الجذور حيث بدأت نشاطها في
        حقل التجارة العامة مبتدئة بتجارة الأدوات المنزلية والالكترونيات
        والمفروشات عمومًا وهكذا.. إلى أن دخلت السوق التركية عام 2013، فاستمرت في
        التجارة العامة، ثم وسعت مجالات تخصصاتها وفتحت خطوط الإنتاج والتصنيع،
        وخاضت بحار الاستيراد والتصدير.
        <br /> كل ذلك بفضل الله تعالى وعظيم توفيقه.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
