import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import styles from '../styles';
import { fooodinsights, sweetsInsights, cookinsights } from '../constants';
import {
  foodProducts,
  sweetsProducts,
  cookProducts,
} from '../pages/api/products';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const FoodInsights = ({ title }) => {
  const router = useRouter();
  const isSweetsPage = router.pathname === '/sweets';
  const isCookPage = router.pathname === '/cook';
  let insightsData = fooodinsights;

  if (isSweetsPage) {
    insightsData = sweetsInsights;
  } else if (isCookPage) {
    insightsData = cookinsights;
  }

  return (
    <section
      className={`${styles.paddings} relative z-10 my-40 main-container`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
        style={{ direction: 'rtl' }}
      >
        <h1 className="text-center py-8 text-yellow-400 text-[20px]">
          إبدأ بالتسوق
        </h1>
        <TitleText title={title} textStyles="text-center" />
        <div className="mt-[90px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  md:gap-16 gap-4">
          {insightsData.map((item, index) => {
            let products = foodProducts[item.id]?.items;
            if (isSweetsPage) {
              products = sweetsProducts[item.id]?.items;
            } else if (isCookPage) {
              products = cookProducts[item.id]?.items;
            }

            return (
              <InsightCard
                key={`insight-${index}`}
                {...item}
                index={index + 1}
                categoryId={item.id}
                products={products}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FoodInsights;
