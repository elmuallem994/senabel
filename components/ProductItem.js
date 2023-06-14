// components/ProductItem.js

import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../context/CartContext';

const ProductItem = ({ product, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 0);
  const { cart, addCartItem, removeCartItem } = useContext(CartContext);
  const [expanded, setExpanded] = useState(initialQuantity > 0);

  useEffect(() => {
    const foundCartItem = cart.find((cartItem) => cartItem.id === product.id);
    if (foundCartItem) {
      setQuantity(foundCartItem.quantity);
      setExpanded(true);
    } else {
      setQuantity(0);
      setExpanded(false);
    }
  }, [cart, product.id]);

  const increaseQuantity = () => {
    if (!expanded) setExpanded(true);
    setQuantity(quantity + 1);
    addCartItem(product);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeCartItem(product.id);
    }
    if (quantity - 1 === 0) setExpanded(false);
  };

  return (
    <div className="flex flex-col items-center py-8">
      <div className="relative w-full h-auto rounded-xl ">
        <div className="overflow-hidden rounded-xl md:h-72 h-40">
          <img
            src={product.imgUrl}
            alt={product.title}
            className="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 object-cover"
          />
        </div>

        <div
          style={{
            boxShadow: '0 10px 40px rgba(223, 185, 83, 0.5)',
          }}
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center bottom-2 text-2xl sm:text-3xl lg:text-4xl  rounded-lg text-primary-black bg-gray-100 border border-gray-300 -mb-4 "
        >
          <button
            type="button"
            onClick={increaseQuantity}
            className="px-2 pt-1  hover:text-yellow-500 "
          >
            <FontAwesomeIcon icon={faPlus} className=" cursor-pointer " />
          </button>
          {expanded && (
            <>
              <div className=" text-primary-black bg-yellow-500 px-3 font-semibold">
                <span className="lg:px-4">{quantity}</span>
              </div>
              <button
                type="button"
                onClick={decreaseQuantity}
                className="px-2 pt-1 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faMinus} className="  cursor-pointer" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <h3 className="mt-4 text-white md:text-xl text-sm font-bold text-center min-h-[50px]">
          {product.title}
        </h3>

        <p className=" md:text-lg text-sm text-center pb-2">
          {product.description}
        </p>
        <p className=" font-bold text-yellow-500 md:text-2xl text-xl text-center ">
          {product.price}TL
        </p>
      </div>
    </div>
  );
};
export default ProductItem;
