const CocktailDetailCard = ({ name, image, description, ingredienti, ricetta }) => {
  return (
    <>
      <div className='flex justify-center w-full mb-8'>
        <div className="container mx-4 sm:mx-8 lg:mx-16 xl:mx-20">
          <div className="bg-turquoise text-white text-center py-2 mt-4 mb-8 rounded-lg w-full">
            <h1 className="font-cocktail text-4xl">{name}</h1>
          </div>
          <div className="lg:flex lg:space-x-12 mt-4 mx-2 lg:mt-8 shadow-lg rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-full max-h-[40vh] overflow-hidden">
                <img src={image} alt={name} className="object-cover h-full w-full" />
              </div>
            </div>
            <div className="lg:w-1/2 p-4 lg:p-8 px-8">
              {ricetta && (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4 lg:mt-0">Ingredienti</h3>
                  <ul className="list-disc list-inside mt-2">
                    {ricetta.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-lg text-gray-700">{ingredient}</li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">Ricetta</h3>
                  <p className="text-lg text-gray-700 mt-2 pb-6">{ricetta.method}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailDetailCard;
