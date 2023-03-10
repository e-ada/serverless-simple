import { NextFunction, Request, Response, Router } from 'express';
import { ChuckNorrisJokesController } from '../controller/ChuckNorrisJokesController';

const chuckNorrisJokesController = new ChuckNorrisJokesController();

const router = Router();

router.get(
  '/chuck-norris-jokes',
  (request: Request, response: Response, next: NextFunction) =>
    chuckNorrisJokesController.handler(request, response, next),
);

export default router;
