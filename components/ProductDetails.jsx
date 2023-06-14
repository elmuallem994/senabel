import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { TitleText } from './CustomTexts';
import ProductItem from './ProductItem';
import CartContext from '../context/CartContext';
import ScrollableItems from './ScrollableItems';
import {
  fooodinsights,
  sweetsInsights,
  cookinsights,
} from '../constants/index';

const ProductDetails = ({ product }) => {
  const { cart } = useContext(CartContext);
  const router = useRouter();

  const isSweetsPage = router.pathname.includes('sweets');
  const isCookPage = router.pathname.includes('cook');

  let items = [
    ...Object.values(fooodinsights),
    ...Object.values(sweetsInsights),
    ...Object.values(cookinsights),
  ];

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section
      className={`${styles.paddings} relative z-10 text-white main-container`}
    >
      <ScrollableItems items={items} />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 0.7)}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex flex-col `}
        style={{ direction: 'rtl' }}
      >
        <TitleText title={product.title} textStyles="text-center" />
        <div className="mt-[50px] grid md:grid-cols-4 grid-cols-2 gap-4">
          {product.items.map((item, index) => {
            const foundCartItem = cart.find(
              (cartItem) => cartItem.id === item.id,
            );
            const itemQuantity = foundCartItem ? foundCartItem.quantity : 0;

            return (
              <ProductItem
                key={index}
                product={item}
                initialQuantity={itemQuantity}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDetails;
