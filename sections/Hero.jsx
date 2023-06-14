import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles'; // Import the CSS file if you created a separate one

const Hero = () => {
  const carouselStyle = {
    minHeight: '100vh',
    maxHeight: '100vh',
    objectFit: 'cover',
  };

  return (
    <section>
      <Carousel
        fade
        interval={4000}
        className="custom-carousel"
        wrap={true}
        pause={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/heroslider1.jpg"
            alt="First slide"
            style={carouselStyle}
          />
          <Carousel.Caption className="flex flex-col items-center">
            <img
              className=" carousel-title md:w-24 lg:w-28 xl:w-32 2xl:w-36 w-24 sm:mb-28 lg:mb-36 xl:mb-36 2xl:mb-52 mb-28"
              src="/separator.svg"
              alt="Separator"
            />
            <h3 className="carousel-title 2xl:pb-3 sm:text-2xl lg:text-4xl 2xl:text-5xl text-3xl font-bold">
              سنابل التجارية
            </h3>
            <p className="carousel-paragraph lg:pt-9 pt-3 sm:text-lg lg:text-2xl 2xl:text-3xl text-lg">
              غذائيات وحلويات فاخرة
            </p>
            <img
              className=" carousel-paragraph md:w-24 lg:w-28 xl:w-32 2xl:w-36 w-24 sm:pt-20 lg:pt-24 2xl:pt-28 pt-16"
              src="/separator.svg"
              alt="Separator"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/heroslider2.jpg"
            alt="Second slide"
            style={carouselStyle}
          />
          <Carousel.Caption className="flex flex-col items-center">
            <img
              className="carousel-title md:w-24 lg:w-28 xl:w-32 2xl:w-36 w-24 sm:mb-28 lg:mb-36 xl:mb-36 2xl:mb-52 mb-56"
              src="/separator.svg"
              alt="Separator"
            />
            <h3 className="carousel-title sm:text-2xl 2xl:pb-3 lg:text-4xl 2xl:text-5xl text-3xl font-bold">
              اسم يتردد بثقتكم يتجدد
            </h3>
            <p className="carousel-paragraph lg:pt-9 pt-3 sm:text-lg lg:text-2xl 2xl:text-3xl text-lg">
              نلبي احتياجاتكم دوما
            </p>
            <img
              className=" carousel-paragraph md:w-24 lg:w-28 xl:w-32 2xl:w-36 w-24 sm:pt-20 lg:pt-24 2xl:pt-28 pt-16"
              src="/separator.svg"
              alt="Separator"
            />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/heroslider3.jpg"
            alt="Second slide"
            style={carouselStyle}
          />
          <Carousel.Caption className="flex flex-col items-center">
            <img
              className="carousel-title md:w-24 lg:w-28 xl:w-32 2xl:w-36 w-24 sm:mb-28 lg:mb-36 xl:mb-36 2xl:mb-52 mb-56"
              src="/separator.svg"
              alt="Separator"
            />
            <h3 className="carousel-title sm:text-2xl 2xl:pb-3 lg:text-4xl 2xl:text-5xl text-3xl font-bold">
              الطبخ الشرقي العريق
            </h3>
            <p className="carousel-paragraph lg:pt-9 pt-3 sm:text-lg lg:text-2xl 2xl:text-3xl text-lg">
              أشهى المأكولات العربية
            </p>
            <img
              className=" carousel-paragraph md:w-24 lg:w-28 xl:w-32 2xl:w-36 w-24 sm:pt-20 lg:pt-24 2xl:pt-28 pt-16"
              src="/separator.svg"
              alt="Separator"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
