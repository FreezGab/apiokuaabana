import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import associationRoutes from './routes/associationRoutes';
import memberRoutes from './routes/memberRoutes';
import feeRoutes from './routes/feeRoutes';
import activityRoutes from './routes/activityRoutes';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/associations', associationRoutes);
app.use('/members', memberRoutes);
app.use('/fees', feeRoutes);
app.use('/activities', activityRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
