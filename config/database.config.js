import mongoose from 'mongoose';
import env from './env/env.config.env.js'

const uri = env.MONGODB_URI;
mongoose.connect(uri);

mongoose.connection.on('connected', () => {
  console.log('Successfully Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed');
    process.exit(0);
  });
});

export default mongoose;