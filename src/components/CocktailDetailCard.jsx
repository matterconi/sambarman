import React from 'react';

const CocktailDetailCard = ({ name, image, description, ingredients, recipe }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 w-full shadow-lg mb-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">{name}</h1>
      <div className="lg:flex lg:space-x-6 mt-4">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={image} alt={name} className="rounded-lg my-4 lg:my-0 object-cover w-full max-h-[50vh]" />
        </div>
        <div className="lg:w-1/2">
          <p className="mt-4 text-lg text-gray-600 lg:mt-0">{description}</p>
          {ingredients && (
            <>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Ingredients</h3>
              <ul className="list-disc list-inside mt-2">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-lg text-gray-700">{ingredient}</li>
                ))}
              </ul>
            </>
          )}
          {recipe && (
            <>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Recipe</h3>
              <ul className="list-disc list-inside mt-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-lg text-gray-700">{ingredient}</li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 mt-2">{recipe.method}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailDetailCard;
