import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CocktailList from './CocktailList';
import Ingredients from './Ingredients';
import Categories from './Categories';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';
import Bio from './Bio'; // Import the Bio component

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:w-full md:flex md:flex-col md:space-y-8 md:mb-8 lg:hidden">
        <div className="mx-8 lg:hidden">
          <Bio />
        </div>
        <div className="md:w-full">
          <CocktailList />
        </div>
      </div>
      <Ingredients />
      <Categories />
      <Features />
      <SocialMedia />
      <ContactForm />
    </div>
  );
};

export default Home;
