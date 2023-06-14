// components/ShoppingCartIcon.js
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../context/CartContext';
import ShoppingCartDropdown from './ShoppingCartDropdown';

const ShoppingCartIcon = () => {
  const cartContext = useContext(CartContext);
  const { cart, totalPrice } = cartContext || { cart: [], totalPrice: 0 }; // Include totalPrice in the destructuring
  //const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const router = useRouter();
  const currentRoute = router.pathname;

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return currentRoute !== '/' &&
    currentRoute !== '/cart' &&
    currentRoute !== '/menu' &&
    currentRoute !== '/contact' ? (
    <div className="relative">
      <div
        className="fixed md:bottom-14 bottom-6 md:left-12 left-8 cursor-pointer rocking-animation"
        onClick={toggleDropdown}
        style={{ zIndex: 1001 }}
      >
        <div className="md:p-3 p-2 rounded-lg bg-yellow-500 hover:bg-yellow-600">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className=" text-white md:text-6xl text-4xl"
          />
        </div>
        {totalPrice >= 0 && ( // Check if totalPrice >= 0
          <span className="absolute md:bottom-12 bottom-9 md:-left-2 -left-2 bg-red-500 text-white sm:text-base text-xs font-bold rounded-full md:h-8 h-6 md:w-16 w-12 flex items-center justify-center">
            {totalPrice.toFixed(0)}₺
          </span>
        )}

        <ShoppingCartDropdown
          visible={dropdownVisible}
          setDropdownVisible={setDropdownVisible}
        />
      </div>
      {dropdownVisible && (
        <div
          onClick={() => setDropdownVisible(false)}
          className="fixed inset-0 bg-black opacity-50"
          style={{ zIndex: 1000 }}
        />
      )}
    </div>
  ) : null;
};

export default ShoppingCartIcon;
