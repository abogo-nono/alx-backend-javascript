#!/usr/bin/node
import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log('Server running');
});

export default app;
module.exports = app;