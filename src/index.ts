import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes';
import { productsRoutes } from './routes/product.routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
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
    schemas:
      { User: require('./swagger/userSchema.json'), Product: require('./swagger/productSchema.json') }

  },
};

const options = {
  swaggerDefinition,
  apis: [__dirname + '/swagger/userSwagger.js', __dirname + '/swagger/productSwagger.js'],
};

const swaggerSpec = swaggerJsDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());
app.use(userRoutes, productsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}🔥`);
});
