import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { ChuckNorrisJokesRouter } from './modules/chuck-norris';

const app: Express = express();
app.disable('x-powered-by');

app.use(bodyParser.json());

app.use(ChuckNorrisJokesRouter);

export default app;
