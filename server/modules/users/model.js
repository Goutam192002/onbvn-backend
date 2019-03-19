import mongoose, { Schema } from 'mongoose';

//as the mongodb takes data in json format, we need to create a mongodb schema
//to do so we use mongoose.js framework for mongodb to create schema(structure) in which mongo will take data in.

const OnbvnRegSchema = new Schema({
   full_name: {
       type: String,
       required: true
   },
   user_name: {
    type: String,
    required: true 
   },
   mobile_number: {
    type: String,
    required: true
},
e_mail: {
 type: String,
 required: true 
},
pass_word: {
    type: String,
    required: true
}
});

//after creating schema,we need to create model for that pirticular schema and name that model anything that you want.
//like we said 'Meetup', and we said that this "Meetup" is the schema which we created , i.e MeetupSchema

export default mongoose.model('Users', OnbvnRegSchema);
