import { connect } from 'mongoose';
import { MONGO_URI } from './config.mjs';

const connectDB = async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
