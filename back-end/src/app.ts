import express from 'express';
import cors from 'cors';
import CheckInController from './controllers/checkinController';
import { CheckInRequestValidator } from './requests/CheckInRequest';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/v1/checkin', CheckInRequestValidator.checkInValidationRules(), CheckInRequestValidator.validate, CheckInController.postCheckIn);

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
