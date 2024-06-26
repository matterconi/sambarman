import React from 'react';
import { useParams } from 'react-router-dom';
import cocktails from '../utils/cocktails'; // Adjust the path according to your project structure
import CocktailDetailCard from './CocktailDetailCard'; // Adjust the path according to your project structure

const CocktailPage = () => {
  console.log(cocktails)
  const { cocktailName } = useParams();

  if (!cocktailName) {
    return <div className="text-center mt-10 text-xl text-gray-600">Cocktail name is not specified</div>;
  }

  const formattedName = cocktailName.replace(/%20/g, ' ');
  const cocktail = cocktails.find(cocktail => cocktail.name === formattedName);

  if (!cocktail) {
    return <div className="text-center mt-10 text-xl text-gray-600">Cocktail not found</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col p-6">
      <CocktailDetailCard
        name={cocktail.name}
        image={cocktail.image}
        description={cocktail.description}
        ingredients={cocktail.ingredients}
        recipe={cocktail.recipe}
      />
    </div>
  );
};

export default CocktailPage;

