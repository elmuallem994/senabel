import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTrash,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import CartContext from '../context/CartContext';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const CartPage = () => {
  const { cart, addCartItem, removeCartItem, clearCart } =
    useContext(CartContext);
  const router = useRouter();
  const [notes, setNotes] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Update the goBack function to use Next.js router
  const goBack = () => {
    router.back();
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const sendToWhatsApp = () => {
    const foodCompanyPhoneNumber = '+905347750054'; // Replace with your food company phone number
    const sweetsCompanyPhoneNumber = '+905061899214'; // Replace with your sweets company phone number

    const foodItems = cart.filter((item) => item.type === 'food');
    const sweetItems = cart.filter((item) => item.type === 'sweets');

    const createMessage = (items) => {
      const orderDetails = items
        .map(
          (item) =>
            `⬅*${item.title}*` +
            `\n${item.quantity} X ${item.price} = *${
              item.price * item.quantity
            } TL*`,
        )
        .join('\n\n');

      const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );

      return (
        `*عدد المنتجات*: ${
          items.length
        }\n\n${orderDetails}\n\n------------------\n*المجموع* ✅\n🧾 *${totalPrice.toFixed(
          2,
        )} TL*` +
        (notes ? `\n\n🔸*ملاحظات*: ${notes}` : '') +
        (phoneNumber ? `\n\n🔸*رقم الهاتف*: ${phoneNumber}` : '')
      );
    };

    const foodMessage = createMessage(foodItems);
    const sweetsMessage = createMessage(sweetItems);

    const encodedFoodMessage = encodeURIComponent(foodMessage);
    const encodedSweetsMessage = encodeURIComponent(sweetsMessage);

    const foodWhatsappUrl = `https://api.whatsapp.com/send?phone=${foodCompanyPhoneNumber}&text=${encodedFoodMessage}`;
    const sweetsWhatsappUrl = `https://api.whatsapp.com/send?phone=${sweetsCompanyPhoneNumber}&text=${encodedSweetsMessage}`;

    if (foodItems.length > 0) {
      window.open(foodWhatsappUrl, '_blank');
    }

    if (sweetItems.length > 0) {
      window.open(sweetsWhatsappUrl, '_blank');
    }
  };

  return (
    <section className="relative z-10 my-60 text-white main-container">
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 0.7)}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex flex-col `}
        style={{ direction: 'rtl' }}
      >
        <div className="container" dir="rtl">
          <h1 className="text-3xl font-bold mb-12 text-center text-yellow-500">
            تفاصيل الطلب
          </h1>

          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-auto overflow-x-hidden">
              <ul className="w-full m-0 p-0">
                {cart.map((item) => {
                  const itemTotal = item.price * item.quantity;

                  return (
                    <li key={item.id} className="mb-6 ">
                      <div className="border rounded-lg p-4 flex flex-wrap md:flex-nowrap items-center md:justify-between">
                        <div className="md:w-20 w-full md:h-auto h-36 overflow-hidden rounded-lg ">
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>

                        <div className="w-1/3 md:w-1/3 flex flex-col items-start md:text-lg text-sm">
                          <div className="mb-2">
                            <span className="font-semibold">{item.title}</span>
                          </div>
                          <div>
                            <div>{item.price} TL</div>
                          </div>
                        </div>
                        <div className="w-1/3 md:w-1/4 flex items-center text-base justify-center md:justify-start md:my-auto my-3">
                          <button
                            onClick={() => addCartItem(item)}
                            className="py-1 px-2 text-primary-black hover:text-yellow-400 bg-gray-100"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="text-sm"
                            />
                          </button>
                          <span className="bg-yellow-400 text-primary-black font-bold py-1 px-3">
                            {item.quantity}
                          </span>
                          {item.quantity > 1 ? (
                            <button
                              onClick={() => removeCartItem(item.id, 1)}
                              className="py-1 px-2 text-primary-black hover:text-yellow-400 bg-gray-100"
                              type="button"
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="text-sm"
                              />
                            </button>
                          ) : (
                            <button
                              onClick={() => removeCartItem(item.id)}
                              className="py-1 px-2 text-red-500 hover:text-red-600 bg-gray-100"
                              type="button"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="shadow text-sm"
                              />
                            </button>
                          )}
                        </div>
                        <div className="w-1/3 md:w-1/4 text-left md:my-0 my-3">
                          <span className="text-lg font-semibold">
                            {itemTotal} TL
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className=" md:w-1/2 mr-0 md:mr-3">
              <div className="border rounded-lg p-4 sticky top-0  ">
                <div className="text-center mb-4 border-b pb-4 pt-2">
                  <span className="text-xl font-semibold ml-12 ">المجموع</span>
                  <span className="text-lg font-semibold">
                    TL{totalPrice.toFixed(2)}
                  </span>
                </div>
                <textarea
                  id="notes"
                  className="w-full h-20 p-2 border rounded text-primary-black bg-gray-300"
                  placeholder="أدخل ملاحظاتك هنا"
                  onChange={handleNotesChange}
                />

                <input
                  type="text"
                  id="phone"
                  className="w-full my-3 p-2 border rounded  text-primary-black bg-gray-300"
                  placeholder="أدخل رقم الهاتف"
                  onChange={handlePhoneNumberChange}
                />

                <button
                  onClick={sendToWhatsApp}
                  className="w-full text-base bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                  type="button"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="ml-2 text-lg" />
                  أرسل الطلب عبر&nbsp;
                  <span className="font-bold">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="pt-4 md:pt-0 relative flex justify-end items-center right-8 md:right-7 2xl:right-80">
        <div className="relative bottom-0  flex items-center bg-red-500 rounded p-2 mr-5">
          <button
            onClick={() => clearCart()}
            className=" text-xs md:text-sm text-white focus:outline-none flex items-center"
            type="button"
          >
            إفراغ السلة
            <FontAwesomeIcon
              icon={faTrash}
              className="text-xs md:text-sm ml-2"
            />
          </button>
        </div>
        <button
          onClick={goBack}
          className="relative text-xs md:text-sm text-white focus:outline-none bottom-0  bg-blue-500 rounded p-2"
          type="button"
        >
          عودة
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 text-xs md:text-sm"
          />
        </button>
      </div>
    </section>
  );
};

export default CartPage;
