import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CocktailList from './components/CocktailList';
import ContactForm from './components/ContactForm';
import BookingCalendar from './components/Calendar';
import SocialMedia from './components/SocialMedia';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CocktailPage from './components/CocktailPage';
import IngredientPage from './components/IngredientPage'; // Import IngredientPage
import CategoryPage from './components/CategoryPage'; // Import CategoryPage

const App = () => {
  return (
    <Router basename="/sambarman">
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cocktail/:cocktailName" element={<CocktailPage />} />
          <Route path="/ingredient/:ingredientName" element={<IngredientPage />} /> {/* Add IngredientPage route */}
          <Route path="/categories/:categoryName" element={<CategoryPage />} /> {/* Add CategoryPage route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
