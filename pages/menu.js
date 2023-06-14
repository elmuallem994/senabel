import React from 'react';
import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';

const Menu = () => (
  <section
    className={`${styles.paddings} relative z-10 bg-primary-black overflow-hidden py-20`}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col pb-36 `}
      style={{ direction: 'rtl' }}
    >
      <h1 className="text-center py-8 text-yellow-400 text-[20px]">
        إبدأ بالتسوق
      </h1>
      <TitleText title={<>أقسامنا الرئيسية</>} textStyles="text-center" />
      <div className="mt-[50px] grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-[110px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </div>
    <div className=" pb-4 " />
  </section>
);

export default Menu;
