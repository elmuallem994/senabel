import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { usePopper } from 'react-popper';

const InsightCard = ({
  imgUrl,
  title,
  subtitle,
  index,
  categoryId,
  products,
}) => {
  const router = useRouter();
  const [showPopover, setShowPopover] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);
  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
  );

  const handleClick = () => {
    // Check if the current category has associated products
    const hasData = products && products.length > 0;

    if (categoryId === 'sweets') {
      router.push('/sweets');
    } else if (categoryId === 'food') {
      router.push('/food');
    } else if (categoryId === 'cook') {
      // new condition for cooking page
      router.push('/cook');
    } else if (hasData) {
      router.push(`/product/${categoryId}`);
    } else {
      setShowPopover(true);
      setTimeout(() => {
        setShowPopover(false);
      }, 3000);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-col gap-6 cursor-pointer md:pt-16"
      style={{ direction: 'rtl' }}
    >
      <div className="w-full h-auto rounded-[32px] mx-auto overflow-hidden">
        <img
          src={imgUrl}
          alt="planet-01"
          className="transform transition-transform duration-500 hover:scale-110 object-cover w-full h-full"
        />
      </div>
      <div className=" pt-[15px] w-full flex flex-col items-center mb-10 ">
        <div className="md:max-w-[60%] max-w-[100%]  mx-auto text-center ">
          <h4 className=" font-extrabold lg:text-[26px] text-[21px] text-yellow-500 product-info">
            {title}
          </h4>
          <p className="mt-[20px] font-normal w- text-center lg:text-[20px] text-[14px] text-secondary-white product-info">
            {subtitle}
          </p>
        </div>
      </div>
      {showPopover && (
        <div
          ref={popperRef}
          {...attributes.popper}
          style={styles.popper} // Use the styles variable here
          className="bg-red-500 p-4 rounded shadow-xl fixed inset-0 w-[25%] max-w-l mx-auto h-20"
        >
          <h1 className="text-white flex justify-center text-center pt-2 text-xl">
            المعذرة لايوجد تفاصيل لعرضها حاليا
          </h1>
        </div>
      )}
    </motion.div>
  );
};

export default InsightCard;
