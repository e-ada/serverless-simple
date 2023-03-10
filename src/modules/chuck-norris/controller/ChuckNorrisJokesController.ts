import { Request, Response } from 'express';
import { BaseController } from '../../../common/express/BaseController';

export class ChuckNorrisJokesController extends BaseController {
  async execute(_request: Request, response: Response): Promise<void> {
    this.json(response, {});
  }
}
