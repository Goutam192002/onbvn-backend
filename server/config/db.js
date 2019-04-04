import mongoose from 'mongoose';

//we are exporting this mongoose config as a function so that we could use this by giving it a callback in server's index.js
export default () => {
    mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb://localhost:27017/onbvn', {useNewUrlParser: true}).catch( error => {
        console.log(`ERROR: Could not connect to database \n REASON: ${error}`)
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Mongodb Running'));
};
