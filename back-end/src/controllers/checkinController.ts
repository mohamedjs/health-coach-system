import { Request, Response, NextFunction } from 'express';
import CheckInService from '../services/checkinService';
import { CheckInRequest } from '../types/checkin';

export default class CheckInController {

  static postCheckIn = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { mood, energy, notes } = req.body as CheckInRequest;
      const result = CheckInService.getSuggestionForCheckIn({ mood, energy, notes });
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
