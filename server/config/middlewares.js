import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

//body-parser returns results of queries in iny form you want like we wanted in json format
// morgan is something that shows-up on console if there is any activity. like errors and activities.  

export default app => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(morgan('dev'));
};


