import Hero from './Hero';
import Features from './Features';
import CocktailList from './CocktailList';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

const Home = () => {
  return (
    <div>
      <Hero />
      <CocktailList />
      <Features />
      <SocialMedia />
      <ContactForm />
    </div>
  );
};

export default Home;
