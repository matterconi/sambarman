import React, { useEffect, useRef, useState } from 'react';
import ingredients from '../utils/ingredients';
import SecondaryButton from './SecondaryButton';

const CustomScrollComponent = () => {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const [displayedIngredients, setDisplayedIngredients] = useState([...ingredients, ...ingredients]);
  const [animationDuration, setAnimationDuration] = useState('20s');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleWheel = (e) => {
    if (listRef.current) {
      e.preventDefault();
      const scrollAmount = 50; // Adjust this value as needed
      listRef.current.scrollLeft += e.deltaY > 0 ? scrollAmount : -scrollAmount;
    }
  };

  const handleMouseEnter = () => {
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'running';
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - listRef.current.offsetLeft);
    setScrollLeft(listRef.current.scrollLeft);
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'running';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = () => {
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleTouchEnd = () => {
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'running';
    }
  };

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('wheel', handleWheel);

      return () => {
        listElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold font-cocktail text-center text-sand mb-12">Ingredients</h1>
      <div
        ref={containerRef}
        className="container relative overflow-x-scroll w-full mask-gradient"
      >
        <div className="w-full overflow-x-scroll">
          <ul
            ref={listRef}
            className="list flex items-center justify-start space-x-8 animate-scrollLeft cursor-grab active:cursor-grabbing"
            style={{ animationDuration, width: 'max-content' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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

export default CustomScrollComponent;
