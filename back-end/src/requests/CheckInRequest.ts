import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export class CheckInRequestValidator {
  static checkInValidationRules = () => {
    return [
      // mood must be present and a non-empty string
      body('mood')
        .notEmpty()
        .withMessage('Mood is required')
        .isString()
        .withMessage('Mood must be a string'),

      // energy must be present and a number (integer or float)
      body('energy')
        .notEmpty()
        .withMessage('Energy is required')
        .isNumeric()
        .withMessage('Energy must be a number'),

      // notes must be present and a string
      body('notes')
        .notEmpty()
        .withMessage('Notes are required')
        .isString()
        .withMessage('Notes must be a string'),
    ];
  };

  static validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(422).json({ error: 'Invalid request body', errors: errors.array() });
  };
}
