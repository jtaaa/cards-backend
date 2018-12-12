import * as express from 'express';
const app = express();

app.use(express.json());

import roomsRouter from './routes/rooms';
app.use('/rooms', roomsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
