import express from 'express';
import routes from '../app/routes/index.routes.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes)

export default app;