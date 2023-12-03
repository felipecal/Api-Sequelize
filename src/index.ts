import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes';
import { procutRoutes } from './routes/product.routes';

export const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(userRoutes, procutRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}🔥`);
});
