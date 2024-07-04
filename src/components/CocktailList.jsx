import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Correct import for Navigation module
import CocktailCard from './CocktailCard'; // Adjust the import path as necessary
import cocktails from '../utils/cocktails';

const CocktailList = ({ cocktailName, ingredient, category, title }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);

  useEffect(() => {
    if (cocktailName) {
      const filtered = cocktails.filter(cocktail =>
        cocktail.name.toLowerCase() !== cocktailName.toLowerCase()
      );
      setFilteredCocktails(filtered);
    } else if (ingredient) {
      const filtered = cocktails.filter(cocktail =>
        cocktail.ingredients && cocktail.ingredients.some(ing => ing.toLowerCase() === ingredient.toLowerCase())
      );
      setFilteredCocktails(filtered);
    } else if (category) {
      const filtered = cocktails.filter(cocktail =>
        cocktail.category && cocktail.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredCocktails(filtered);
    } else {
      setFilteredCocktails(cocktails);
    }
  }, [cocktailName, ingredient, category]);

  return (
    <div className="flex justify-center mx-4 sm:mx-8 lg:mx-16 xl:mx-20">
      <div className="container mb-4">
        <div className="bg-sand text-white text-center py-2 mb-8 rounded-lg">
          <h1 className="font-cocktail text-4xl">{title || 'Cocktail'}</h1>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          className="custom-swiper"
          direction="horizontal"
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1000: {
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
          {filteredCocktails.length > 0 ? (
            filteredCocktails.map((cocktail, i) => (
              <SwiperSlide key={i}>
                <CocktailCard cocktail={cocktail} isFocused={focusedIndex === i} />
              </SwiperSlide>
            ))
          ) : (
            <div>No cocktails found</div>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default CocktailList;
