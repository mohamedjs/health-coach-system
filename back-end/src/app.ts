import express from 'express';
import cors from 'cors';
import CheckInController from './controllers/checkinController';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.post('/api/v1/checkin', CheckInController.postCheckIn);

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
