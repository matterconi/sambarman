import React, { useRef, useEffect, useState } from 'react';
import categories from '../utils/categories';
import SecondaryButton from './SecondaryButton';

const Categories = () => {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const [displayedCategories, setDisplayedCategories] = useState([...categories, ...categories]);
  const [animationDuration, setAnimationDuration] = useState('20s');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startTouchX, setStartTouchX] = useState(0);

  useEffect(() => {
    const adjustListWidth = () => {
      if (listRef.current) {
        const containerWidth = listRef.current.offsetWidth;
        const itemWidth = listRef.current.querySelector('li').offsetWidth + 32; // item width + space-x-8 (2rem)
        const itemsNeeded = Math.ceil(containerWidth / itemWidth);
        const newCategories = [];

        while (newCategories.length < itemsNeeded * categories.length) {
          newCategories.push(...categories);
        }

        newCategories.push(...newCategories); // Double the array to ensure smooth looping
        setDisplayedCategories(newCategories);

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
    if (containerRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY || e.deltaX; // Use deltaY for vertical mouse wheels and deltaX for horizontal mouse wheels
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
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
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX); // scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setStartTouchX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setIsDragging(true);
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (listRef.current) {
      listRef.current.style.animationPlayState = 'running';
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startTouchX); // scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);

      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold font-cocktail text-center text-sand mb-12">Categories</h1>
      <div
        ref={containerRef}
        className="container overflow-x-hidden whitespace-nowrap w-full p-2 cursor-grab mask-gradient hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <ul
          ref={listRef}
          className="list flex items-center justify-start space-x-8 animate-scrollLeft cursor-grab active:cursor-grabbing"
          style={{ animationDuration, width: 'max-content', animationPlayState: 'running', animationDirection: 'reverse' }}
          onMouseEnter={() => { if (listRef.current) listRef.current.style.animationPlayState = 'paused'; }}
          onMouseLeave={() => { if (listRef.current) listRef.current.style.animationPlayState = 'running'; }}
          onTouchStart={() => { if (listRef.current) listRef.current.style.animationPlayState = 'paused'; }}
          onTouchEnd={() => { if (listRef.current) listRef.current.style.animationPlayState = 'running'; }}
        >
          {displayedCategories.map((category, index) => (
            <li key={index} className="whitespace-nowrap">
              <SecondaryButton to={`/cocktails/${category}`} color="bg-terracotta">
                {capitalizeFirstLetter(category)}
              </SecondaryButton>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Categories;
