import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser'; // Use body-parser to parse JSON
import { config } from 'dotenv';
import authRoutes from './routes/auth';
import organizationRoutes from './routes/organizations';
import projectRoutes from './routes/projects';
import activityRoutes from './routes/activities';
import { authenticateJWT } from './middlewares/authMiddleware';

// Initialize environment variables
config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('MONGODB_URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas!'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(json()); // For parsing application/json

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/organizations', authenticateJWT, organizationRoutes); // Protect organization routes
app.use('/api/projects', authenticateJWT, projectRoutes); // Protect project routes
app.use('/api/activities', authenticateJWT, activityRoutes); // Protect activity routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const cors = require('cors');
app.use(cors()); // Enable CORS for all routes