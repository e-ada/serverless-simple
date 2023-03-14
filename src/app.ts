import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { JokeRouter } from './modules/joke';

const app: Express = express();
app.disable('x-powered-by');

app.use(bodyParser.json());

app.use(JokeRouter);

export default app;
