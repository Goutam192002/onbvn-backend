import mongoose from 'mongoose';

//we are exporting this mongoose config as a function so that we could use this by giving it a callback in server's index.js
export default () => {
    mongoose.connect('mongodb://localhost:27017/onbvn', {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Mongodb Running'));
};