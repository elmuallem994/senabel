'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import Image from 'next/image'; // Import the Image component from next/image
import Link from 'next/link';

const Footer = () => (
  <motion.footer
    className={`${styles.xPaddings} py-20 relative`}
    style={{ direction: 'rtl' }}
    id="footer-section"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-center flex-wrap gap-5">
        <div className="flex flex-col items-center justify-center w-full md:w-auto space-y-5">
          <h4 className=" md:text-[35px] text-[25px] text-white text-center">
            مجموعة سنابل التجارية
          </h4>

          <div className="flex items-center justify-end">
            <h6 className="md:text-[18px] text-[13px] text-white text-center leading-loose">
              ✔ المكتب : إسطنبول / الفاتح / شارع فوزي باشا
              <br />
              ✔ الفــرع الأول والمصنع : إسطنبــول / رامي / توبشلار
              <br />✔ الفرع الثاني : إسطنبول / بشاك شهير / ميدان كايا شهير
            </h6>
          </div>

          <div className="flex gap-8 md:order-none order-1 pt-10 pb-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="md:w-[40px] w-[25px] md:h-[50px] h-[30px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex md:flex-row flex-col-reverse items-center md:justify-between sm:justify-center gap-4">
          <h4 className="font-medium text-[15px] text-white opacity-60 md:mb-0 ">
            سياسة الخصوصية | الحقوق | نبذه عنا
          </h4>

          <p className="font-normal text-[14px] text-white opacity-60 md:mt-0">
            مجموعة سنابل التجارية 2023 ©
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
