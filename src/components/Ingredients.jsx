import React, { useEffect, useRef, useState } from 'react';
import ingredients from '../utils/ingredients';
import SecondaryButton from './SecondaryButton';

const Ingredients = () => {
  const containerRef = useRef(null);
  const [displayedIngredients, setDisplayedIngredients] = useState([...ingredients, ...ingredients]);
  const [animationDuration, setAnimationDuration] = useState('20s');

  useEffect(() => {
    const adjustListWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = containerRef.current.querySelector('li').offsetWidth + 32; // item width + space-x-8 (2rem)
        const itemsNeeded = Math.ceil(containerWidth / itemWidth);
        const newIngredients = [];

        while (newIngredients.length < itemsNeeded * ingredients.length) {
          newIngredients.push(...ingredients);
        }

        newIngredients.push(...newIngredients); // Double the array to ensure smooth looping
        setDisplayedIngredients(newIngredients);

        // Adjust animation duration based on container width
        const duration = containerWidth / 10; // Example calculation, adjust as needed
        setAnimationDuration(`${duration}s`);
      }
    };

    adjustListWidth();
    window.addEventListener('resize', adjustListWidth);

    return () => {
      window.removeEventListener('resize', adjustListWidth);
    };
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold font-cocktail text-center text-sand mb-12">Ingredients</h1>
      <div ref={containerRef} className="relative overflow-hidden w-full mask-gradient">
        <div className="w-full overflow-x-hidden">
          <ul
            className="flex items-center justify-start space-x-8 animate-scrollLeft"
            style={{ animationDuration, width: 'max-content' }}
          >
            {displayedIngredients.map((liquor, index) => (
              <li key={index} className="whitespace-nowrap">
                <SecondaryButton to={`/cocktails/${liquor}`} color="bg-terracotta">
                  {capitalizeFirstLetter(liquor)}
                </SecondaryButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
