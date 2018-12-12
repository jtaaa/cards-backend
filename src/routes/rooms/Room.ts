import Pile from './Pile';
import Deck from './Deck';
import Card from './Card';

class Room {
  roomid: number;
  piles: { [name: string]: Pile } = {};

  constructor(roomid: number) {
    this.roomid = roomid;
    this.piles.deck = new Deck();
  }

  moveCards(fromPile: string = 'deck', toPile: string, fromIndex: number = 0, toIndex: number = 0, count: number = 1) {
    const removed = this.piles[fromPile].getCards(fromIndex, count);
    this.piles[fromPile].removeCards(fromIndex, count);
    this.piles[toPile].addCards(removed, toIndex);
  }

  addPile(pileName: string, cards: Card[] = []) {
    this.piles[pileName] = new Pile({ cards });
  }

  getPileCards(pileName: string) {
    return this.piles[pileName].cards;
  }

  shufflePile(pileName: string, rounds: number = 10) {
    this.piles[pileName].shuffle(rounds);
  }
};

export default Room;