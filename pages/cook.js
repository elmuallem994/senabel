import React from 'react';
import Navbar from '../components/Navbar';
import { FoodInsights } from '../sections';

const CookPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <FoodInsights title="قسم الطبخ" />

      <div className="gradient-15 z-0" />
    </div>
  </div>
);

export default CookPage;
