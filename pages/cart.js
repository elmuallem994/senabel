import Navbar from '../components/Navbar';

import { CartPage } from '../components';

const Cart = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <CartPage />
      <div className="gradient-15 z-0" />
    </div>
  </div>
);

export default Cart;
