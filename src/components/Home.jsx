import Hero from './Hero';
import Features from './Features';
import CocktailList from './CocktailList';
import Ingredients from './Ingredients';
import Categories from './Categories';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';
import CustomScrollComponent from './CustomScrollComponent';

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
      <CustomScrollComponent />
    </div>
  );
};

export default Home;
