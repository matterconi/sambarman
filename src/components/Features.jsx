import SecondaryButton from './SecondaryButton'; // Ensure this import is correct

import lessonsImage from '/assets/lessons.avif';
import eventsImage from '/assets/barCounseling.avif';
import homeBarmanImage from '/assets/homeBarman.avif';

const ServiceCard = ({ service, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg mx-2 mb-12">
      <img src={service.image} alt={service.title} className="w-full h-60 object-cover rounded-t-lg" />
      <div className="my-8">
        <div className="mx-4 mb-4">
          <h3 className="text-2xl font-semibold mb-4 text-black">{service.title}</h3>
          <p className="text-seaBlue mx-8 text-justify">{service.description}</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <SecondaryButton onClick={service.onClick}>{buttonText}</SecondaryButton>
      </div>
      <div className='p-4'></div>
    </div>
  );
};

import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    title: 'Lezioni Private',
    description: "Impara l'arte della mixologia con lezioni private personalizzate. Perfetto per appassionati e aspiranti barman. Le nostre lezioni coprono una vasta gamma di tecniche di bartending, dalla preparazione di cocktail classici alla creazione di bevande innovative e gustose.",
    image: lessonsImage,
    onClick: () => alert('Lezioni Private'),
    buttonText: 'Prenota ora una lezione'
  },
  {
    title: 'Eventi Privati',
    description: "Rendi indimenticabili i tuoi eventi con il servizio di barman professionale per feste private, matrimoni e altre occasioni speciali. Il nostro team di esperti barman porterà il bar direttamente nella location del tuo evento, assicurando un'esperienza di alta qualità e un servizio impeccabile.",
    image: eventsImage,
    onClick: () => alert('Eventi Privati'),
    buttonText: 'Richiedi un preventivo'
  },
  {
    title: 'Barman a Domicilio',
    description: "Goditi cocktail perfetti nel comfort di casa tua con il servizio di barman a domicilio. Ideale per cene, feste e serate tra amici. Il nostro barman preparerà una selezione di cocktail su misura per te e i tuoi ospiti, utilizzando ingredienti freschi per garantire la massima qualità.",
    image: homeBarmanImage,
    onClick: () => alert('Barman a Domicilio'),
    buttonText: 'Rendi unica la tua serata'
  }
];

const Features = () => {
  return (
    <div className="py-12 bg-turquoise">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-white text-seaBlue text-center py-2 mb-8 rounded-lg">
          <h1 className="font-cocktail text-4xl">Servizi Offerti</h1>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard service={service} buttonText={service.buttonText} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
