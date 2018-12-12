import Card from './Card'

class Pile {
  cards = [];
  constructor({ cards }: { cards: Card[] }) {
    this.cards = cards;
  }

  size()                                            { return this.cards.length;                              }
  getCards(cardIndex: number, count: number = 0)    { return this.cards.slice(cardIndex, cardIndex + count); }
  removeCards(cardIndex: number, count: number = 0) { this.cards.splice(cardIndex, count);                   }
  addCards(cards: Card[], cardIndex: number = 0)    { this.cards.splice(cardIndex, 0, ...cards);             }
  shuffle(rounds: number)                           { /* this function is unimplemented */                   }
}

export default Pile;
