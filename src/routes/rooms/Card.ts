type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

class Card {
  suit: Suit;
  number: number;
  constructor({ suit, number }: { suit: Suit, number: number }) {
    this.suit = suit;
    this.number = number;
  }
}

export default Card;
export { suits, Suit };