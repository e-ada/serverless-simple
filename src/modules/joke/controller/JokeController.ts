import axios from 'axios';
import { Request, Response } from 'express';
import { BaseController } from '../../../common/express/BaseController';

export class JokeController extends BaseController {
  async execute(_request: Request, response: Response): Promise<void> {
    const joke = await axios.get('https://api.chucknorris.io/jokes/random');
    this.json(response, joke.data);
  }
}
