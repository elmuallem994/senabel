import { Footer, Navbar, SocialIcons } from '../components';
import React, { useState, useEffect } from 'react';
import { About, Explore, Hero, Insights, World } from '../sections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />

      <div className="relative">
        <About />

        <div className="hidden md:block gradient-03 z-0" />
        <Explore />
      </div>

      <SocialIcons />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
      </div>

      <World />

      <Footer />

      {!isAtTop && (
        <button
          className="fixed bottom-6 iinfo text-yellow-500 font-extrabold text-3xl p-4 rounded-full rocking-animation z-50"
          onClick={handleScrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default Home;
