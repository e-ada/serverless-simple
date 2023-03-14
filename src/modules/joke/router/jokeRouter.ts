import { NextFunction, Request, Response, Router } from 'express';
import { JokeController } from '../controller/JokeController';

const jokeController = new JokeController();

const router = Router();

router.get(
  '/joke',
  (request: Request, response: Response, next: NextFunction) =>
    jokeController.handler(request, response, next),
);

export default router;
