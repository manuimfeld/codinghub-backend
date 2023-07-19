import express from 'express';
import cors from 'cors';
import { connectDb } from './db/connect';
import { profileController } from './controllers/profile';
require('dotenv').config();
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const profileRoutes = require('./routes/profile');

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);
app.use('/api', projectRoutes);
app.use('/api', profileRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
