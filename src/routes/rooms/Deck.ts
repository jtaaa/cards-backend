import Pile from './Pile';
import Card, { suits } from './Card';

class Deck extends Pile {
  constructor() {
    let cards: Card[] = [];
    for (const suit of suits) {
      for (let number = 1; number <= 13; ++number) {
        cards.push({ suit, number });
      }
    }
    super({ cards });
  }

  waterfallShuffle() {
    const left = this.cards.slice(0, this.cards.length / 2);
    const right = this.cards.slice(this.cards.length / 2);
    let shuffledCards: Card[] = [];
    for (let n = 0, i = 0, j = 0; n < this.cards.length; ++n) {
      if (i >= left.length) {
        shuffledCards.push(right[j++]);
      } else if (j >= right.length) {
        shuffledCards.push(left[i++]);
      } else if (Math.random() > 0.5) {
        shuffledCards.push(right[j++]);
      } else {
        shuffledCards.push(left[i++]);
      }
    }
    this.cards = shuffledCards;
  }

  shuffle(rounds: number) {
    for (let n = 0; n < rounds; ++n) {
      this.waterfallShuffle();
    }
  }
};

export default Deck;
