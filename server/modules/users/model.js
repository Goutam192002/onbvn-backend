import mongoose, { Schema } from 'mongoose';

//as the mongodb takes data in json format, we need to create a mongodb schema
//to do so we use mongoose.js framework for mongodb to create schema(structure) in which mongo will take data in.

const UserSchema = new Schema({
  name: {
       type: String,
       required: true
  },
  username: {
    type: String,
    required: true 
  },
  mobile_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// after creating schema,we need to create model for that particular schema and name that model anything that you want.

export default mongoose.model('Users', UserSchema);
