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
  info: {
    title: 'Api Sequelize',
    version: "1.0",
    description: "Documenation of the Sequelize Api"
  },
  components: {
    schemas: require('./schemas.json')
  }
};
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.ts']
}

app.use(cors());
app.use(express.json());
app.use(userRoutes, procutRoutes);

const swaggerSpec = swaggerJsDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server running on port ${port}🔥`);
});
