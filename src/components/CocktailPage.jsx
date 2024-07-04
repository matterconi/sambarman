import React from 'react';
import { useParams } from 'react-router-dom';
import cocktails from '../utils/cocktails'; // Adjust the path according to your project structure
import CocktailDetailCard from './CocktailDetailCard'; // Adjust the path according to your project structure
import CocktailList from './CocktailList';

const CocktailPage = () => {
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
    <div className="flex justify-center items-center flex-col my-8">
      <CocktailDetailCard
        name={cocktail.name}
        image={cocktail.image}
        description={cocktail.description}
        ingredienti={cocktail.recipe.ingredients}
        ricetta={cocktail.recipe}
      />
      <div className="w-full">
        <CocktailList 
          cocktailName={cocktailName}
          title={"Discover More"}
        />
      </div>
    </div>
  );
};

export default CocktailPage;

