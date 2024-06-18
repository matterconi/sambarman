import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

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
    <div className="relative h-[30rem] sm:h-[36rem] md:h-[42rem] lg:h-[48rem] xl:h-[700px] mx-4 sm:mx-8 lg:mx-16 xl:mx-20 2xl:h-[1000px] my-8">
      <img 
        src="/src/assets/hero.avif" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 w-full h-full bg-seaBlue opacity-60 rounded-lg"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cocktail text-sand font-bold">Sam, Barman</h1>
        <h2 className="text-xl mx-8 text-center md:text-2xl lg:text-3xl text-white mt-4 font-semibold">Cocktail e simpatia direttamente a casa tua</h2>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <Button 
            onClick={handleCTAClick} 
            color="bg-sunset" 
            colorIcon="text-seaBlue" 
            icon={faCocktail}
          >
            Scopri una ricetta
          </Button>
          <Button 
            onClick={handleVideoClick} 
            color="bg-seaBlue" 
            colorIcon="text-sunset" 
            icon={faYoutube}
          >
            Guarda un mio video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;