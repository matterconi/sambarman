import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../utils/categories'; // Adjust the path according to your project structure
import CocktailList from './CocktailList'; // Adjust the import path as necessary

const CategoryPage = () => {
  const { categoryName } = useParams();
  console.log(categoryName);

  if (!categoryName) {
    return <div className="text-center mt-10 text-xl text-gray-600">Category name is not specified</div>;
  }

  const formattedName = categoryName.replace(/%20/g, ' ');
  const category = categories.find(category => category.name.toLowerCase() === formattedName.toLowerCase());

  if (!category) {
    return <div className="text-center mt-10 text-xl text-gray-600">Category not found</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <CategoryDetailCard
        name={category.name}
        immagine={category.immagine}
        occasione={category.occasione}
        descrizione={category.descrizione}
      />
      <div className="w-full">
        <CocktailList
          category={category.name}
          title={`Cocktails in ${category.name}`}
        />
      </div>
    </div>
  );
};

const CategoryDetailCard = ({ name, immagine, occasione, descrizione }) => {
  return (
    <>
      <div className='flex justify-center w-full my-8'>
        <div className="container mx-4 sm:mx-8 lg:mx-16 xl:mx-20">
          <div className="bg-turquoise text-white text-center py-2 mt-4 mb-8 rounded-lg w-full">
            <h1 className="font-cocktail text-4xl capitalize">{name}</h1>
          </div>
          <div className="lg:flex lg:space-x-12 mt-4 mx-2 lg:mt-8 shadow-lg rounded-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="w-full overflow-hidden flex justify-center my-4">
                <img src={immagine} alt={name} className="object-contain" />
              </div>
            </div>
            <div className="lg:w-1/2 p-4 lg:p-8 px-8">
              <h3 className="text-xl font-semibold text-gray-800 mt-4 lg:mt-0">Occasione</h3>
              <p className="text-lg text-gray-700 mt-2">{occasione}</p>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Descrizione</h3>
              <p className="text-lg text-gray-700 mt-2 pb-6">{descrizione}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
