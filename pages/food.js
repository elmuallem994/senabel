import React from 'react';
import Navbar from '../components/Navbar';
import { FoodInsights } from '../sections';

const Food = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <FoodInsights title="قسم الغذائيات" />

      <div className="gradient-15 z-0" />
    </div>
  </div>
);

export default Food;
