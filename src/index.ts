import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/user.routes';

export const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

app.use('/', router);

app.listen(port, () => {
  console.log(
    `Server running on port ${port}🔥`
  );
});