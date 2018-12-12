import Room from './Room';
import * as express from 'express';
const router = express.Router();

let rooms: { [name: string]: Room } = {};

router.post('/', function(req, res) {
  const { roomid } = req.body;
  rooms[roomid] = new Room(roomid);
  res.status(200).send({ roomid });
});

router.get('/:roomid', function (req, res) {
  res.send(rooms[req.params.roomid]);
});

router.get('/:roomid/piles/:pilename', function (req, res) {
  const { roomid, pilename } = req.params;
  res.send(rooms[roomid].getPileCards(pilename));
});

router.get('/:roomid/piles/:pilename/shuffle', function (req, res) {
  const { roomid, pilename } = req.params;
  rooms[roomid].shufflePile(pilename, req.query.rounds);
  res.sendStatus(200);
});

router.post('/:roomid/piles', function (req, res) {
  const { roomid } = req.params;
  const { pilename } = req.body;
  rooms[roomid].addPile(pilename);
  res.sendStatus(200);
});

router.post('/:roomid/piles/move', function (req, res) {
  const { roomid } = req.params;
  const { fromPile, toPile, fromIndex, toIndex, count } = req.body;
  rooms[roomid].moveCards(fromPile, toPile, fromIndex, toIndex, count);
  res.sendStatus(200);
});

export default router;