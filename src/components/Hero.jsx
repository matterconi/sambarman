import React from 'react';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import Bio from './Bio'; // Import the Bio component
import heroImage from '/assets/hero.avif'; // Correctly import the hero image

const Hero = () => {
  const handleCTAClick = () => {
    // Add your CTA click handling logic here
    alert('CTA Button Clicked!');
  };

  const handleVideoClick = () => {
    // Add your video click handling logic here
    alert('Video Button Clicked!');
  };

  return (
    <div className="relative h-[30rem] sm:h-[36rem] md:h-[42rem] lg:h-[48rem] xl:h-[700px] 2xl:h-[1000px] mx-4 sm:mx-8 lg:mx-16 xl:mx-20 my-12 flex flex-col lg:flex-row items-center space-x-8">
      <div className="relative lg:w-1/2 h-full flex items-center w-full">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 w-full h-full bg-seaBlue opacity-60 rounded-lg"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 px-4 sm:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cocktail text-sand font-bold">Sam, Barman</h1>
          <h2 className="mx-8 text-center md:text-xl text-white mt-4 font-semibold">Cocktail e simpatia direttamente a casa tua</h2>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <Button 
              onClick={handleCTAClick} 
              color="bg-sunset" 
              colorIcon="text-seaBlue" 
              icon={faCocktail}
            >
              I miei servizi
            </Button>
            <Button 
              onClick={handleVideoClick} 
              color="bg-seaBlue" 
              colorIcon="text-sunset" 
              icon={faCocktail}
            >
              Scopri una ricetta
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:justify-center h-full">
        <Bio />
      </div>
    </div>
  );
};

export default Hero;
