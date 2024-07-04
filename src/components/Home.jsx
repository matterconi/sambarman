import Hero from './Hero';
import Features from './Features';
import CocktailList from './CocktailList';
import Ingredients from './Ingredients';
import Categories from './Categories';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

const Home = () => {
  return (
    <div>
      <Hero />
      <CocktailList />
      <Ingredients />
      <Categories />
      <Features />
      <SocialMedia />
      <ContactForm />
    </div>
  );
};

export default Home;
