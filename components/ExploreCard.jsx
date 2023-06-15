import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { useRouter } from 'next/router';

const ExploreCard = ({
  id,
  aliasId,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => {
  const router = useRouter();
  const handleClickk = (e) => {
    if (active === id) {
      e.stopPropagation();
      router.push(`/product/${encodeURIComponent(aliasId)}`);
    }
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={(e) => {
        handleClick(id);
        handleClickk(e);
      }}
      style={{ direction: 'rtl' }}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <>
          <div className="absolute w-full h-full bg-[rgba(0,0,0,0.66)] rounded-[24px]" />
          <h3 className="font-semibold sm:text-[26px] text-[18px] text-white w-full text-center absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        </>
      ) : (
        <div className="absolute bottom-0 pt-8 pr-4 flex justify-start w-full md:h-1/3 h-[75%] flex-col bg-[rgba(53,52,47,0.81)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter}  w-[50px] h-[40px] rounded-[24px] glassmorphism mb-[10px]`}
          >
            <img
              src="/logo.png"
              alt="headset"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
          <div>
            <p className="font-normal md:text-[16px] text-[10px] leading-[20.16px] text-yellow-400 uppercase">
              انتقل إلى القائمة
            </p>

            <h2 className="mt-[10px] font-semibold sm:text-[32px] text-[18px] text-white">
              {title}
            </h2>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
