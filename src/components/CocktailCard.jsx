import SecondaryButton from './SecondaryButton'; // Adjust the import path as necessary

const CocktailCard = ({ cocktail }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg mx-2 mb-12" style={{ height: '500px', position: 'relative' }}>
      <img src={cocktail.image} alt={cocktail.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="my-8 px-4">
        <div className="mx-4 mb-4">
          <h3 className="text-xl font-semibold mb-2 text-center">{cocktail.name}</h3>
          <p className="text-lg text-gray-700 text-center">{cocktail.description}</p>
        </div>
      </div>
      <div className="absolute bottom-12 w-full flex justify-center">
        <SecondaryButton to={`/cocktail/${cocktail.name}`} color='bg-sunset' >Ricetta completa</SecondaryButton>
      </div>
    </div>
  );
};

export default CocktailCard;
