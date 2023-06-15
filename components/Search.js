import React, { useContext, useState, useEffect, useRef } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  foodProducts,
  sweetsProducts,
  cookProducts,
} from '../pages/api/products';
import CartContext from '../context/CartContext';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const { cart, addCartItem, updateCartItem, removeCartItem } =
    useContext(CartContext);

  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleNavigation = () => {
    setSearchTerm('');
    router.push('/cart');
  };

  const products = Object.values(foodProducts)
    .concat(Object.values(sweetsProducts))
    .concat(Object.values(cookProducts))
    .map((category) => category.items)
    .flat();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchTerm(''); // Clear the search field
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block " dir="rtl">
      <div
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => !searchTerm && setIsExpanded(true)}
      >
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-7 z-10 text-xl text-white">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          className="transition-all duration-500 ease-in-out pl-4 md:w-64 w-48 bg-transparent border-b-2 border-white text-white focus:outline-none shadow-md"
          placeholder="ابدأ البحث ..."
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
          style={{ borderColor: 'white !important' }}
        />
      </div>

      {searchTerm && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setSearchTerm('')}
        />
      )}

      {searchTerm && (
        <div
          ref={dropdownRef}
          className="absolute md:w-96 w-72"
          style={{
            zIndex: 3000,
            background: 'white',
            color: 'black',
            maxHeight: '400px',
            overflowX: 'auto',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {filteredProducts.length > 0 ? (
            <div>
              {filteredProducts.map((product, index) => {
                const inCart = cart.find((item) => item.id === product.id);
                const quantity = inCart ? inCart.quantity : 0;
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <img
                        src={product.imgUrl}
                        alt={product.title}
                        style={{ width: '50px', height: '50px' }}
                        className="mr-1"
                      />
                      <div className="text-xs">
                        <div>
                          <span className="font-semibold">{product.title}</span>
                        </div>
                        <div className="mt-2">
                          <div>{product.price}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      {inCart ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              updateCartItem(product.id, quantity + 1)
                            }
                            className="py-1 px-2 bg-gray-100"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          <span className="bg-yellow-400 text-primary-black font-bold py-1 px-3">
                            {quantity}
                          </span>
                          {quantity > 1 ? (
                            <button
                              type="button"
                              onClick={() =>
                                updateCartItem(product.id, quantity - 1)
                              }
                              className="py-1 px-2 bg-gray-100"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => removeCartItem(product.id)}
                              className="py-1 px-2 bg-gray-100"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addCartItem(product)}
                          className="py-1 px-3 bg-yellow-400 text-xl font-extrabold text-white"
                        >
                          +
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-4 font-semibold text-red-500">
              لا يوجد نتائج ..
            </div>
          )}

          <button
            type="button"
            onClick={handleNavigation}
            className="bg-yellow-500 text-white px-2 py-1 text-sm block z-20 shadow-md text-center w-full transition-all duration-500 delay-400 transform"
            style={{
              position: 'sticky',
              bottom: 0,
            }}
          >
            إنتقل إلى السلة
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
