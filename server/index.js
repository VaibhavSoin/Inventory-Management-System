import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import inventoryRoutes from './routes/inventory.js';
import analyticsRoutes from './routes/analytics.js';
import predictionRoutes from './routes/predictions.js';
import userRoutes from './routes/user.js';
import mailRoutes from './routes/email.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/inventory', inventoryRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/user', userRoutes);
app.use('/api/mail', mailRoutes);

const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://vaibhavsoincs22:betagama21@cluster0.fbe7m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error));
