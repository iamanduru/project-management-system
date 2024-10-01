import express, { json } from 'express';
import connectDB from './config/db.mjs';
import authRoutes from './routes/authRoutes';
import { PORT } from './config/config.mjs';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
