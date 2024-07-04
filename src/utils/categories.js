import pestatiImage from '/assets/pestati.jpg';
import classiciImage from '/assets/classici.jpg';
import analcoliciImage from '/assets/analcolici.jpg';
import vintageImage from '/assets/vintage.jpg';
import aperitiviImage from '/assets/aperitivi.jpg';
import afterDinnerImage from '/assets/afterDinner.jpg';
import tropicaliImage from '/assets/tropicali.jpg';
import digestiviImage from '/assets/digestivi.jpg';

const categories = [
  {
    name: 'pestati',
    immagine: pestatiImage,
    occasione: 'Perfetti per rinfrescarsi durante una giornata calda.',
    descrizione: 'I cocktail pestati sono preparati schiacciando gli ingredienti freschi come frutta, erbe e spezie nel bicchiere. Questo processo rilascia gli oli essenziali e i succhi, creando un drink vibrante e aromatico. Sono ideali per chi ama sapori freschi e vivaci.'
  },
  {
    name: 'classici',
    immagine: classiciImage,
    occasione: 'Adatti a qualsiasi occasione, dalla serata elegante all\'aperitivo informale.',
    descrizione: 'I cocktail classici sono drink che hanno superato la prova del tempo e sono apprezzati in tutto il mondo. Questi drink sono caratterizzati da ricette ben bilanciate e sapori raffinati, spesso a base di ingredienti semplici e di alta qualità.'
  },
  {
    name: 'analcolici',
    immagine: analcoliciImage,
    occasione: 'Perfetti per chi desidera un drink gustoso senza alcool.',
    descrizione: 'I cocktail analcolici offrono tutte le complessità e le sfumature dei drink tradizionali, senza l\'aggiunta di alcool. Sono perfetti per chi vuole godersi un drink delizioso in qualsiasi momento della giornata, senza effetti collaterali.'
  },
  {
    name: 'vintage',
    immagine: vintageImage,
    occasione: 'Ideali per serate retrò o eventi a tema vintage.',
    descrizione: 'I cocktail vintage riportano in vita i drink delle epoche passate, spesso con ricette originali e tecniche di preparazione tradizionali. Questi drink evocano un senso di nostalgia e classe, perfetti per chi ama lo stile d\'altri tempi.'
  },
  {
    name: 'aperitivi',
    immagine: aperitiviImage,
    occasione: 'Ideali per iniziare la serata con stile.',
    descrizione: 'Gli aperitivi sono cocktail leggeri e rinfrescanti, pensati per stimolare l\'appetito prima di un pasto. Solitamente sono caratterizzati da note amare o acidule e sono perfetti per accompagnare antipasti e stuzzichini.'
  },
  {
    name: 'after dinner',
    immagine: afterDinnerImage,
    occasione: 'Perfetti per concludere una cena con eleganza.',
    descrizione: 'I cocktail after dinner sono drink ricchi e complessi, spesso con note dolci e cremose. Sono ideali per essere gustati lentamente dopo un pasto, magari accompagnati da un dessert o da un sigaro.'
  },
  {
    name: 'tropicali',
    immagine: tropicaliImage,
    occasione: 'Perfetti per una festa estiva o una serata in spiaggia.',
    descrizione: 'I cocktail tropicali sono drink esotici e colorati, ricchi di frutta fresca e sapori vivaci. Spesso serviti in bicchieri decorati, questi drink evocano l\'atmosfera delle vacanze e dei luoghi esotici.'
  },
  {
    name: 'digestivi',
    immagine: digestiviImage,
    occasione: 'Ideali per favorire la digestione dopo un pasto abbondante.',
    descrizione: 'I cocktail digestivi sono drink pensati per essere gustati dopo un pasto, spesso a base di liquori e ingredienti che aiutano la digestione. Sono perfetti per chiudere una cena con un tocco di classe e benessere.'
  }
];

export default categories;
