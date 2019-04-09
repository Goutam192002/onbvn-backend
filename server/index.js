import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { UserRoutes } from './modules';
import swaggerJSDOC from "swagger-jsdoc";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, 'api-docs')));

const swaggerDefinition = {
    info: {
        title: 'OnBVN Backend API',
        version: '0.0.1',
        description: 'Backend for the indian social media app OnBVN'
    },
    host: 'localhost:3000',
    basePath: '/'
};

const swaggerOptions = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./server/modules/**/routes.js',
    './server/modules/**/model.js']
};

const swaggerSpec = swaggerJSDOC(swaggerOptions);

/** Database **/
dbConfig();

/** Middlewares **/
middlewaresConfig(app);

app.use('/api/v1/', [UserRoutes]);
app.get('/api/documentation/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.json('Hello World!'));

app.listen(PORT, err => {
    if(err) {
        console.error(err);
    } {
        console.log('App listening to port : 3000');
    }
});

export default app;
