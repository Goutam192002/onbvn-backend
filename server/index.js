import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import {OnbvnRoutes} from './modules';
import cors from 'cors';
const app = express();
 
/** Database **/ 
dbConfig();

/** Middlewares **/
middlewaresConfig(app);

app.use('/api', [OnbvnRoutes]);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, err => {
    if(err) {
        console.error(err);
    } {
        console.log('App listning to port : 3000');
    }
});
