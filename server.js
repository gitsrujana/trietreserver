

import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.js';
import jobseekerRoutes from './routes/jobseekerRoutes.js';
import path from 'path';
import dotenv from 'dotenv';
import jobseekerPersonalDetailsRoutes from './routes/jobSeekerPersonalDetailsRoutes.js';
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join('uploads')));

// Routes
app.use('/v1/api/jobseekers', jobseekerRoutes);
app.use('/v1/api/personal-details', jobseekerPersonalDetailsRoutes);

// Sync database
sequelize.sync({ alter: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error syncing database', err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
