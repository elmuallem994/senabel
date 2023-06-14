import React, { useContext, useEffect } from 'react';
import CartContext from '../context/CartContext';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../styles';

const ShoppingCartDropdown = ({ visible, setDropdownVisible }) => {
  const { cart, addCartItem, removeCartItem, clearCart } =
    useContext(CartContext);

  const router = useRouter();

  const handleNavigation = () => {
    setDropdownVisible(false); // Close the dropdown
    router.push('/cart');
  };
  const handleClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (cart.length === 0 && visible) {
      setDropdownVisible(false);
    }
  }, [cart, visible, setDropdownVisible]);

  return (
    <div className="relative" onClick={handleClick} style={{ zIndex: 3000 }}>
      <div
        className={`absolute md:bottom-32 bottom-20 -left-12 flex flex-col-reverse transition-all duration-5000 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={handleNavigation}
          className={`bg-yellow-500 text-white px-4 py-2 md:text-2xl text-lg block z-20 shadow-md text-center w-full transition-all duration-500 delay-400 transform ${
            visible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          عرض السلة
        </button>

        {visible && (
          <div className=" md:w-[500px] w-screen bg-white shadow-md p-4 z-10 left-0 flex flex-col overflow-y-auto md:max-h-[500px] max-h-[350px] transition-all duration-900 ease-in-out transform -translate-y-0 delay-100">
            <button
              type="button"
              onClick={() => clearCart()}
              className="bg-red-500 text-white px-2 py-2 text-xs block w-[25%] left-0 mb-3 rounded-md transition-all duration-500 delay-400 transform"
            >
              إفراغ السلة
            </button>
            <ul dir="rtl" className="flex-1 pb-4">
              {cart.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <li key={item.id} className="mb-6">
                    <div className="border rounded-lg p-3 flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="w-20 h-14 overflow-hidden">
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="w-16 h-auto object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <div>
                            <span className="font-semibold">{item.title}</span>
                          </div>
                          <div className="mt-2">
                            <div> {item.price} TL</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <div className="flex items-center text-sm">
                          <button
                            type="button"
                            onClick={() => addCartItem(item)}
                            className="py-1 px-2 bg-gray-100"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <span className="bg-yellow-400 text-primary-black font-bold py-1 px-3">
                            {item.quantity}
                          </span>
                          {item.quantity > 1 ? (
                            <button
                              type="button"
                              onClick={() => removeCartItem(item.id, 1)}
                              className="py-1 px-2 bg-gray-100"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => removeCartItem(item.id)}
                              className="py-1 px-2 bg-gray-100"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="shadow"
                              />
                            </button>
                          )}
                        </div>

                        <span className="flex items-center text-sm pl-3 font-semibold">
                          {itemTotal} TL
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartDropdown;
