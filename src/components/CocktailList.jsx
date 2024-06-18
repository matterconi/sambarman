// Cocktail.js
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CocktailCard from './CocktailCard'; // Adjust the import path as necessary
import mojitoImage from '../../public/assets/mojito.avif';
import margaritaImage from '../../public/assets/margarita.avif';
import oldFashionedImage from '../../public/assets/oldfashioned.jpg';
import pinaColadaImage from '../../public/assets/pinacolada.avif';
import martiniImage from '../../public/assets/martini.avif';
import cosmopolitanImage from '../../public/assets/cosmopolitan.avif';
import bloodyMaryImage from '../../public/assets/bloodymary.avif';

const cocktails = [
  { 
    name: 'Mojito', 
    image: mojitoImage, 
    description: 'Un cocktail vibrante e rinfrescante a base di menta fresca, lime e un tocco di rum, perfetto per una giornata estiva.' 
  },
  { 
    name: 'Margarita', 
    image: margaritaImage, 
    description: 'Un cocktail piccante e agrumato con tequila, succo di lime e liquore all\'arancia, spesso servito con un bordo salato.' 
  },
  { 
    name: 'Old Fashioned', 
    image: oldFashionedImage, 
    description: 'Un cocktail classico a base di whiskey, preparato con bitters, zucchero e una scorza di agrumi, che offre un sapore liscio e ricco.' 
  },
  { 
    name: 'Piña Colada', 
    image: pinaColadaImage, 
    description: 'Un mix cremoso e tropicale di cocco, ananas e rum, che ti trasporta direttamente in un paradiso sulla spiaggia.' 
  },
  { 
    name: 'Martini', 
    image: martiniImage, 
    description: 'Un cocktail elegante e sofisticato, tipicamente preparato con gin o vodka e vermouth, guarnito con un\'oliva o una scorza di limone.' 
  },
  { 
    name: 'Cosmopolitan', 
    image: cosmopolitanImage, 
    description: 'Un cocktail chic e alla moda, preparato con vodka, triple sec, succo di mirtillo e lime fresco, perfetto per ogni occasione.' 
  },
  { 
    name: 'Bloody Mary', 
    image: bloodyMaryImage, 
    description: 'Un cocktail audace e saporito, con vodka, succo di pomodoro e spezie, guarnito con sedano e una fetta di limone.' 
  }
];


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