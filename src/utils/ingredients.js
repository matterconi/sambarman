import ginImage from '/assets/gin.jpg';
import vodkaImage from '/assets/vodka.jpg';
import rumImage from '/assets/rum.jpg';
import tequilaImage from '/assets/tequila.jpg';
import campariImage from '/assets/campari.jpg';
import vermouthDolceImage from '/assets/vermouthDolce.jpg';

const ingredients = [
  {
    name: 'gin',
    produzione: 'Distillazione di un cereale neutro e botaniche come il ginepro',
    descrizione: 'Il gin è un distillato ottenuto da cereali come orzo, segale e mais, aromatizzato con bacche di ginepro e altre botaniche. Ha un sapore distintivo di ginepro, con note di agrumi, spezie e fiori. È usato in cocktail classici come il Gin Tonic, il Negroni e il Martini, dove aggiunge una complessità aromatica unica.',
    image: ginImage
  },
  {
    name: 'vodka',
    produzione: 'Distillazione di cereali o patate',
    descrizione: 'La vodka è un distillato chiaro ottenuto dalla fermentazione di cereali o patate. È nota per il suo sapore neutro e pulito, che la rende ideale per una vasta gamma di cocktail. La vodka è l\'ingrediente principale di drink come il Vodka Martini, il Cosmopolitan e il Bloody Mary.',
    image: vodkaImage
  },
  {
    name: 'rum',
    produzione: 'Distillazione di succo di canna da zucchero fermentato o melassa',
    descrizione: 'Il rum è un distillato ottenuto dalla fermentazione e distillazione del succo di canna da zucchero o melassa. Può variare notevolmente nel sapore, dal dolce e leggero al ricco e complesso. È utilizzato in cocktail popolari come il Mojito, la Piña Colada e il Daiquiri, dove aggiunge profondità e dolcezza.',
    image: rumImage
  },
  {
    name: 'tequila',
    produzione: 'Distillazione di succo di agave blu fermentato',
    descrizione: 'La tequila è un distillato ottenuto dalla fermentazione e distillazione del succo di agave blu. Ha un sapore robusto e terroso con note di agrumi e spezie. È l\'ingrediente chiave nei Margarita e nei Tequila Sunrise, dove conferisce un carattere distintivo e audace.',
    image: tequilaImage
  },
  {
    name: 'campari',
    produzione: 'Infusione di erbe, spezie e frutta in alcool e acqua',
    descrizione: 'Il Campari è un liquore amaro ottenuto dall’infusione di erbe, spezie e frutta in alcool e acqua. Ha un sapore amaro e complesso con note di agrumi e spezie. Viene usato in cocktail classici come il Negroni e l\'Americano, dove aggiunge una nota amaricante e un colore vibrante.',
    image: campariImage
  },
  {
    name: 'vermouth dolce',
    produzione: 'Vino fortificato con erbe, spezie e zucchero',
    descrizione: 'Il vermouth dolce è un vino fortificato aromatizzato con erbe, spezie e zucchero. Ha un sapore ricco e dolce con note di erbe e spezie. È un componente fondamentale di cocktail come il Manhattan e il Negroni, dove aggiunge dolcezza e complessità.',
    image: vermouthDolceImage
  },
];

export default ingredients;
