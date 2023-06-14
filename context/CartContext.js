import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  cart: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  updateCartItem: () => {},
  clearCart: () => {},
  totalPrice: 0, // Add a default value for totalPrice in the context
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Add state for totalPrice

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total); // Update totalPrice whenever the cart changes
  }, [cart]);

  const addCartItem = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
    }
  };

  const updateCartItem = (productId, newQuantity) => {
    const index = cart.findIndex((item) => item.id === productId);

    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity = newQuantity;
      setCart(newCart);
    }
  };

  const removeCartItem = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);

    if (index !== -1) {
      const newCart = [...cart];

      if (newCart[index].quantity > 1) {
        // Decrease quantity by 1
        newCart[index].quantity--;
      } else {
        // Remove item from cart if quantity is 1
        newCart.splice(index, 1);
      }

      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCartItem,
        removeCartItem,
        updateCartItem,
        clearCart,
        totalPrice,
      }} // Include totalPrice in the context value
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
