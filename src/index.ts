import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes';
import { procutRoutes } from './routes/product.routes';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

export const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Api Sequelize',
    version: '1.0',
    description: 'Documentation of the Sequelize API',
  },
  components: {
    schemas: require('./schemas.json'),
  },
};

const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.ts'],
};
const swaggerSpec = swaggerJsDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
app.use(userRoutes, procutRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}🔥`);
});
