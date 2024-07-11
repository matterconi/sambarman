import React from 'react';
import barmanImage from '/assets/barman.jpg'; // Assicurati di avere un'immagine del barman

const Bio = () => {
  return (
    <div className="max-md:mb-8 h-full flex flex-col justify-between mt-8 lg:mt-0 lg:h-auto lg:max-h-[48rem] xl:max-h-[700px] 2xl:max-h-[1000px]">
      <div className="bg-turquoise text-white text-center py-3 mb-4 rounded-lg w-full">
        <h1 className="font-cocktail text-4xl">Chi sono</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg w-full pt-4 pb-8 px-8 flex flex-col items-center flex-grow mt-2">
        <img 
          src={barmanImage} 
          alt="Barman Sam" 
          className="w-40 h-40 rounded-full object-cover lg:w-52 lg:h-52 mt-4"
        />
        <div className="text-left mt-4 lg:mt-6 lg:ml-8">
          <p className="text-gray-700 mt-2 text-lg">Ho 22 anni e vengo dalla Sardegna.</p>
          <p className="text-gray-700 mt-2 text-lg">Lavoro come barman da 8 anni, preparando cocktail deliziosi e unici.</p>
          <p className="text-gray-700 mt-4 text-lg">Ho una passione profonda per la creazione di drink innovativi. Il mio cocktail preferito da preparare è il Negroni. Ho iniziato la mia carriera in un piccolo bar del mio paese natale.</p>
          <p className="text-gray-700 mt-4 text-lg">Curiosità: una volta ho creato un cocktail ispirato ai meravigliosi paesaggi della Sardegna, che è diventato subito popolare tra i clienti locali!</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;


