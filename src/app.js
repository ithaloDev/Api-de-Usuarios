import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import router from './routes/userRoute.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuração do Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuários',
            version: '1.0.0',
            description: 'API para gerenciamento de usuários',
        },
    },
    apis: [path.join(__dirname, '/routes/*.js')],
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use('/users', router);

export default app;
