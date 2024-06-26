// Cocktail.js
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CocktailCard from './CocktailCard'; // Adjust the import path as necessary
import cocktails from '../utils/cocktails';

const CocktailList = () => {
    const [focusedIndex, setFocusedIndex] = useState(0);

   
    return (
      <div className="flex justify-center mx-4 sm:mx-8 lg:mx-16 xl:mx-20">
        <div className="container mb-4">
          <div className="bg-sand text-white text-center py-2 mb-8 rounded-lg">
              <h1 className="font-cocktail text-4xl">Cocktail</h1>
          </div>
          <Swiper
              direction="horizontal"
              spaceBetween={20}
              breakpoints={{
                  320: {
                      slidesPerView: 1,
                  },
                  640: {
                      slidesPerView: 2,
                  },
                  768: {
                      slidesPerView: 3,
                  },
                  1200: {
                      slidesPerView: 4,
                  },
                  1600: {
                    slidesPerView: 5,
                  }
              }}
              onSlideChange={(swiper) => setFocusedIndex(swiper.activeIndex)}
              onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
          >
              {cocktails.map((cocktail, i) => (
                  <SwiperSlide key={i}>
                      <CocktailCard cocktail={cocktail} isFocused={focusedIndex === i} />
                  </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
  );
};

export default CocktailList;