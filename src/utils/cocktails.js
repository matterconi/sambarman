import mojitoImage from '/assets/mojito.avif';
import margaritaImage from '/assets/margarita.avif';
import pinaColadaImage from '/assets/pinaColada.avif';
import martiniImage from '/assets/martini.avif';
import cosmopolitanImage from '/assets/cosmopolitan.avif';
import bloodyMaryImage from '/assets/bloodyMary.avif';
import ginFizzImage from '/assets/ginFizz.avif';
import moscowMuleImage from '/assets/moscowMule.jpg';
import cubaLibreImage from '/assets/cubaLibre.jpg';
import tequilaSunriseImage from '/assets/tequilaSunrise.jpg';
import longIslandImage from '/assets/longIsland.jpg';
import sexOnTheBeachImage from '/assets/sexOnTheBeach.jpg';
import negroniImage from '/assets/negroni.jpg';
import negroniSbagliatoImage from '/assets/negroniSbagliato.jpg';
import americanoImage from '/assets/americano.jpg';
import garibaldiImage from '/assets/garibaldi.jpg';
import mitoImage from '/assets/mito.jpg';
import godfatherImage from '/assets/godfather.jpg';
import godmotherImage from '/assets/godmother.jpg';
import daiquiriImage from '/assets/daiquiri.jpg';
import whiteLadyImage from '/assets/whiteLady.jpg';
import kamikazeImage from '/assets/kamikaze.jpg';
import espressoMartiniImage from '/assets/espressoMartini.jpg';
import manhattanImage from '/assets/manhattan.jpg';
import boulevardierImage from '/assets/boulevardier.jpg';
import caipiroskaImage from '/assets/caipiroska.jpg';
import caipirinhaImage from '/assets/caipirinha.jpg';
import rumCoolerImage from '/assets/rumCooler.jpg';
import palomaImage from '/assets/paloma.jpg';
import whiskeySourImage from '/assets/whiskeySour.jpg';
import darkNStormyImage from '/assets/darkNStormy.jpg';

const cocktails = [
  {
    name: 'Gin Fizz',
    image: ginFizzImage,
    description: 'Un cocktail rinfrescante con gin, succo di limone, zucchero e acqua frizzante, perfetto per l\'estate.',
    ingredients: ['gin', 'succo di limone', 'zucchero', 'acqua frizzante'],
    recipe: {
      ingredients: [
        '60ml gin',
        '30ml succo di limone',
        '15ml sciroppo di zucchero',
        'Soda'
      ],
      method: 'Shakerare il gin, il succo di limone e lo sciroppo di zucchero con ghiaccio. Filtrare in un bicchiere e aggiungere soda.'
    },
    category: 'classici'
  },
  {
    name: 'Moscow Mule',
    image: moscowMuleImage,
    description: 'Un classico cocktail con vodka, birra allo zenzero e succo di lime, servito in una tazza di rame.',
    ingredients: ['vodka', 'birra allo zenzero', 'succo di lime'],
    recipe: {
      ingredients: [
        '60ml vodka',
        '120ml birra allo zenzero',
        '15ml succo di lime',
        'Fetta di lime'
      ],
      method: 'Riempire una tazza di rame con ghiaccio. Aggiungere vodka e succo di lime. Completare con birra allo zenzero e guarnire con una fetta di lime.'
    },
    category: 'classici'
  },
  {
    name: 'Cuba Libre',
    image: cubaLibreImage,
    description: 'Un cocktail semplice con rum, cola e succo di lime, che ti porta ai tropici con un sorso.',
    ingredients: ['rum', 'cola', 'succo di lime'],
    recipe: {
      ingredients: [
        '60ml rum',
        '120ml cola',
        '15ml succo di lime',
        'Fetta di lime'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere rum e succo di lime. Completare con cola e guarnire con una fetta di lime.'
    },
    category: 'classici'
  },
  {
    name: 'Tequila Sunrise',
    image: tequilaSunriseImage,
    description: 'Un cocktail vibrante con tequila, succo d\'arancia e granatina, perfetto per l\'alba.',
    ingredients: ['tequila', 'succo d\'arancia', 'granatina'],
    recipe: {
      ingredients: [
        '60ml tequila',
        '120ml succo d\'arancia',
        '15ml granatina'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere tequila e succo d\'arancia. Versare lentamente la granatina e lasciare che si depositi sul fondo del bicchiere.'
    },
    category: 'tropicali'
  },
  {
    name: 'Pina Colada',
    image: pinaColadaImage,
    description: 'Un mix cremoso e tropicale di cocco, ananas e rum, che ti trasporta direttamente in un paradiso sulla spiaggia.',
    ingredients: ['rum', 'crema di cocco', 'succo di ananas'],
    recipe: {
      ingredients: [
        '60ml rum',
        '90ml succo di ananas',
        '30ml crema di cocco',
        'Fetta di ananas',
        'Ciliegina'
      ],
      method: 'Shakerare il rum, il succo di ananas e la crema di cocco con ghiaccio. Filtrare in un bicchiere. Guarnire con una fetta di ananas e una ciliegina.'
    },
    category: 'tropicali'
  },
  {
    name: 'Long Island',
    image: longIslandImage,
    description: 'Un cocktail forte con vodka, rum, tequila, gin, triple sec, succo di limone e cola.',
    ingredients: ['vodka', 'rum', 'tequila', 'gin', 'triple sec', 'succo di limone', 'cola'],
    recipe: {
      ingredients: [
        '15ml vodka',
        '15ml rum',
        '15ml tequila',
        '15ml gin',
        '15ml triple sec',
        '30ml succo di limone',
        'Coca-Cola',
        'Fetta di limone'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere vodka, rum, tequila, gin, triple sec e succo di limone. Completare con Coca-Cola e guarnire con una fetta di limone.'
    },
    category: 'classici'
  },
  {
    name: 'Sex on the Beach',
    image: sexOnTheBeachImage,
    description: 'Un cocktail fruttato con vodka, liquore alla pesca, succo di mirtillo e succo d\'arancia.',
    ingredients: ['vodka', 'liquore alla pesca', 'succo di mirtillo', 'succo d\'arancia'],
    recipe: {
      ingredients: [
        '40ml vodka',
        '20ml liquore alla pesca',
        '40ml succo di mirtillo',
        '40ml succo d\'arancia',
        'Fetta d\'arancia'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere vodka, liquore alla pesca, succo di mirtillo e succo d\'arancia. Mescolare e guarnire con una fetta d\'arancia.'
    },
    category: 'tropicali'
  },
  {
    name: 'Negroni',
    image: negroniImage,
    description: 'Un classico cocktail con gin, Campari e vermouth dolce, perfetto per ogni occasione.',
    ingredients: ['gin', 'Campari', 'vermouth dolce'],
    recipe: {
      ingredients: [
        '30ml gin',
        '30ml Campari',
        '30ml vermouth dolce',
        'Scorza d\'arancia'
      ],
      method: 'Mescolare gin, Campari e vermouth dolce con ghiaccio in un bicchiere. Guarnire con una scorza d\'arancia.'
    },
    category: 'aperitivi'
  },
  {
    name: 'Negroni Sbagliato',
    image: negroniSbagliatoImage,
    description: 'Una variante del Negroni con vino frizzante al posto del gin, leggero e rinfrescante.',
    ingredients: ['Campari', 'vermouth dolce', 'vino frizzante'],
    recipe: {
      ingredients: [
        '30ml Campari',
        '30ml vermouth dolce',
        '60ml vino frizzante',
        'Scorza d\'arancia'
      ],
      method: 'Mescolare Campari e vermouth dolce in un bicchiere con ghiaccio. Completare con vino frizzante e guarnire con una scorza d\'arancia.'
    },
    category: 'aperitivi'
  },
  {
    name: 'Americano',
    image: americanoImage,
    description: 'Un cocktail leggero con Campari, vermouth dolce e acqua frizzante, perfetto per l\'aperitivo.',
    ingredients: ['Campari', 'vermouth dolce', 'acqua frizzante'],
    recipe: {
      ingredients: [
        '30ml Campari',
        '30ml vermouth dolce',
        'Acqua frizzante',
        'Scorza d\'arancia'
      ],
      method: 'Mescolare Campari e vermouth dolce in un bicchiere con ghiaccio. Completare con acqua frizzante e guarnire con una scorza d\'arancia.'
    },
    category: 'aperitivi'
  },
  {
    name: 'Garibaldi',
    image: garibaldiImage,
    description: 'Un cocktail semplice con Campari e succo d\'arancia, dal sapore agrumato e fresco.',
    ingredients: ['Campari', 'succo d\'arancia'],
    recipe: {
      ingredients: [
        '30ml Campari',
        '90ml succo d\'arancia',
        'Fetta d\'arancia'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere Campari e succo d\'arancia. Mescolare e guarnire con una fetta d\'arancia.'
    },
    category: 'aperitivi'
  },
  {
    name: 'Mito',
    image: mitoImage,
    description: 'Un classico cocktail italiano con ingredienti non specificati nel menu, misterioso e affascinante.',
    ingredients: [], // Placeholder, ingredients to be defined
    recipe: {
      ingredients: [
        // Placeholder ingredients
      ],
      method: 'La ricetta del Mito non è specificata nel menu.'
    },
    category: 'vintage'
  },
  {
    name: 'Godfather',
    image: godfatherImage,
    description: 'Un semplice cocktail con whisky e amaretto, dolce e forte, perfetto per una serata rilassante.',
    ingredients: ['whisky', 'amaretto'],
    recipe: {
      ingredients: [
        '30ml whisky',
        '30ml amaretto'
      ],
      method: 'Mescolare whisky e amaretto in un bicchiere con ghiaccio.'
    },
    category: 'after dinner'
  },
  {
    name: 'Godmother',
    image: godmotherImage,
    description: 'Un cocktail simile al Godfather ma con vodka al posto del whisky, dolce e forte.',
    ingredients: ['vodka', 'amaretto'],
    recipe: {
      ingredients: [
        '30ml vodka',
        '30ml amaretto'
      ],
      method: 'Mescolare vodka e amaretto in un bicchiere con ghiaccio.'
    },
    category: 'after dinner'
  },
  {
    name: 'Daiquiri',
    image: daiquiriImage,
    description: 'Un classico cocktail con rum, succo di lime e sciroppo semplice, rinfrescante e agrumato.',
    ingredients: ['rum', 'succo di lime', 'sciroppo semplice'],
    recipe: {
      ingredients: [
        '60ml rum',
        '30ml succo di lime',
        '15ml sciroppo semplice'
      ],
      method: 'Shakerare rum, succo di lime e sciroppo semplice con ghiaccio. Filtrare in un bicchiere da cocktail.'
    },
    category: 'classici'
  },
  {
    name: 'White Lady',
    image: whiteLadyImage,
    description: 'Un classico cocktail con gin, triple sec e succo di limone, elegante e rinfrescante.',
    ingredients: ['gin', 'triple sec', 'succo di limone'],
    recipe: {
      ingredients: [
        '40ml gin',
        '20ml triple sec',
        '15ml succo di limone'
      ],
      method: 'Shakerare gin, triple sec e succo di limone con ghiaccio. Filtrare in un bicchiere da cocktail.'
    },
    category: 'classici'
  },
  {
    name: 'Kamikaze',
    image: kamikazeImage,
    description: 'Un semplice cocktail con vodka, triple sec e succo di lime, perfetto per ogni occasione.',
    ingredients: ['vodka', 'triple sec', 'succo di lime'],
    recipe: {
      ingredients: [
        '30ml vodka',
        '30ml triple sec',
        '30ml succo di lime'
      ],
      method: 'Shakerare vodka, triple sec e succo di lime con ghiaccio. Filtrare in un bicchiere da cocktail.'
    },
    category: 'classici'
  },
  {
    name: 'Cosmopolitan',
    image: cosmopolitanImage,
    description: 'Un cocktail chic con vodka, triple sec, succo di mirtillo e succo di lime, alla moda e delizioso.',
    ingredients: ['vodka', 'triple sec', 'succo di mirtillo', 'succo di lime'],
    recipe: {
      ingredients: [
        '40ml vodka',
        '20ml triple sec',
        '30ml succo di mirtillo',
        '15ml succo di lime'
      ],
      method: 'Shakerare vodka, triple sec, succo di mirtillo e succo di lime con ghiaccio. Filtrare in un bicchiere da cocktail.'
    },
    category: 'after dinner'
  },
  {
    name: 'Margarita',
    image: margaritaImage,
    description: 'Un cocktail piccante con tequila, succo di lime e triple sec, spesso servito con un bordo salato.',
    ingredients: ['tequila', 'succo di lime', 'triple sec'],
    recipe: {
      ingredients: [
        '40ml tequila',
        '30ml succo di lime',
        '20ml triple sec',
        'Sale'
      ],
      method: 'Inumidire il bordo del bicchiere con succo di lime e immergerlo nel sale. Shakerare tequila, succo di lime e triple sec con ghiaccio. Filtrare nel bicchiere.'
    },
    category: 'classici'
  },
  {
    name: 'Espresso Martini',
    image: espressoMartiniImage,
    description: 'Un cocktail sofisticato con vodka, liquore al caffè ed espresso, perfetto per gli amanti del caffè.',
    ingredients: ['vodka', 'liquore al caffè', 'espresso'],
    recipe: {
      ingredients: [
        '40ml vodka',
        '20ml liquore al caffè',
        '30ml espresso'
      ],
      method: 'Shakerare vodka, liquore al caffè ed espresso con ghiaccio. Filtrare in un bicchiere da cocktail.'
    },
    category: 'after dinner'
  },
  { 
    name: 'Martini', 
    image: martiniImage, 
    description: 'Un cocktail elegante e sofisticato, tipicamente preparato con gin o vodka e vermouth, guarnito con un\'oliva o una scorza di limone.',
    ingredients: ['gin', 'vodka', 'vermouth'],
    recipe: {
      ingredients: [
        '60ml gin',
        '10ml vermouth',
        'Oliva o scorza di limone'
      ],
      method: 'Mescolare gin e vermouth con ghiaccio in un bicchiere. Filtrare in un bicchiere da cocktail e guarnire con un\'oliva o una scorza di limone.'
    },
    category: 'classici'
  },
  {
    name: 'Manhattan',
    image: manhattanImage,
    description: 'Un classico cocktail con whisky, vermouth dolce e angostura, dal sapore liscio e ricco.',
    ingredients: ['whisky', 'vermouth dolce', 'angostura'],
    recipe: {
      ingredients: [
        '50ml whisky',
        '20ml vermouth dolce',
        '2 gocce di angostura'
      ],
      method: 'Mescolare whisky, vermouth dolce e angostura con ghiaccio. Filtrare in un bicchiere da cocktail e guarnire con una ciliegia.'
    },
    category: 'vintage'
  },
  {
    name: 'Boulevardier',
    image: boulevardierImage,
    description: 'Un cocktail simile al Negroni ma con whisky al posto del gin, forte e robusto.',
    ingredients: ['whisky', 'Campari', 'vermouth dolce'],
    recipe: {
      ingredients: [
        '45ml whisky',
        '30ml Campari',
        '30ml vermouth dolce'
      ],
      method: 'Mescolare whisky, Campari e vermouth dolce con ghiaccio. Filtrare in un bicchiere da cocktail e guarnire con una scorza d\'arancia.'
    },
    category: 'vintage'
  },
  {
    name: 'Mojito',
    image: mojitoImage,
    description: 'Un vibrante e rinfrescante cocktail con rum, menta, lime, zucchero e acqua frizzante.',
    ingredients: ['rum', 'menta', 'lime', 'zucchero', 'acqua frizzante'],
    recipe: {
      ingredients: [
        '60ml rum',
        '1/2 lime, tagliato a spicchi',
        '2 cucchiaini di zucchero',
        '6-8 foglie di menta',
        'Acqua frizzante'
      ],
      method: 'Pestare la menta e il lime con lo zucchero in un bicchiere. Riempire con ghiaccio, aggiungere il rum e completare con acqua frizzante. Mescolare delicatamente e guarnire con una foglia di menta.'
    },
    category: 'pestati'
  },
  {
    name: 'Caipiroska',
    image: caipiroskaImage,
    description: 'Un semplice cocktail con vodka, lime e zucchero, dal sapore fresco e agrumato.',
    ingredients: ['vodka', 'lime', 'zucchero'],
    recipe: {
      ingredients: [
        '60ml vodka',
        '1 lime, tagliato a spicchi',
        '2 cucchiaini di zucchero'
      ],
      method: 'Pestare il lime con lo zucchero in un bicchiere. Riempire con ghiaccio, aggiungere la vodka e mescolare.'
    },
    category: 'pestati'
  },
  {
    name: 'Caipirinha',
    image: caipirinhaImage,
    description: 'Un tradizionale cocktail brasiliano con cachaça, lime e zucchero, rinfrescante e delizioso.',
    ingredients: ['cachaça', 'lime', 'zucchero'],
    recipe: {
      ingredients: [
        '60ml cachaça',
        '1 lime, tagliato a spicchi',
        '2 cucchiaini di zucchero'
      ],
      method: 'Pestare il lime con lo zucchero in un bicchiere. Riempire con ghiaccio, aggiungere la cachaça e mescolare.'
    },
    category: 'pestati'
  },
  {
    name: 'Rum Cooler',
    image: rumCoolerImage,
    description: 'Un rinfrescante cocktail con rum e vari mixer, perfetto per le giornate calde.',
    ingredients: ['rum', 'mixers'],
    recipe: {
      ingredients: [
        '60ml rum',
        '120ml mixer a scelta (es. succo di frutta, soda, ginger ale)'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere il rum e completare con il mixer a scelta. Mescolare e guarnire con una fetta di lime o arancia.'
    },
    category: 'tropicali'
  },
  {
    name: 'Paloma',
    image: palomaImage,
    description: 'Un rinfrescante cocktail con tequila e soda al pompelmo, perfetto per l\'estate.',
    ingredients: ['tequila', 'soda al pompelmo'],
    recipe: {
      ingredients: [
        '60ml tequila',
        '120ml soda al pompelmo',
        '15ml succo di lime',
        'Sale',
        'Fetta di lime'
      ],
      method: 'Inumidire il bordo del bicchiere con succo di lime e immergerlo nel sale. Riempire il bicchiere con ghiaccio, aggiungere tequila, succo di lime e soda al pompelmo. Mescolare delicatamente e guarnire con una fetta di lime.'
    },
    category: 'tropicali'
  },
  {
    name: 'Whiskey Sour',
    image: whiskeySourImage,
    description: 'Un classico cocktail con whisky, succo di limone e sciroppo semplice, dal sapore equilibrato.',
    ingredients: ['whisky', 'succo di limone', 'sciroppo semplice'],
    recipe: {
      ingredients: [
        '60ml whisky',
        '30ml succo di limone',
        '15ml sciroppo semplice'
      ],
      method: 'Shakerare whisky, succo di limone e sciroppo semplice con ghiaccio. Filtrare in un bicchiere da cocktail e guarnire con una ciliegia e una fetta di limone.'
    },
    category: 'classici'
  },
  {
    name: 'Dark’n Stormy',
    image: darkNStormyImage,
    description: 'Un cocktail audace con rum scuro e birra allo zenzero, perfetto per una serata tempestosa.',
    ingredients: ['rum scuro', 'birra allo zenzero'],
    recipe: {
      ingredients: [
        '60ml rum scuro',
        '120ml birra allo zenzero',
        '15ml succo di lime',
        'Fetta di lime'
      ],
      method: 'Riempire un bicchiere con ghiaccio. Aggiungere il rum scuro e completare con birra allo zenzero. Aggiungere il succo di lime e mescolare delicatamente. Guarnire con una fetta di lime.'
    },
    category: 'tropicali'
  }
];

export default cocktails;
