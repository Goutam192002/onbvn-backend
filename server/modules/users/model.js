import mongoose, { Schema } from 'mongoose';

/**
 * @swagger
 * definition:
 *    users:
 *        properties:
 *          name:
 *            type: string
 *          username:
 *            type: string
 *          email:
 *            type: string
 *          mobileNumber:
 *            type: string
 *          profilePicture:
 *            type: string
 */
const UserSchema = new Schema({
  name: {
       type: String,
       required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
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
  },
  profilePicture: {
    type: String,
    required: true
  },
  aadharUID: {
    type: String,
    required: true,
    unique: true
  }
});

// after creating schema,we need to create model for that particular schema and name that model anything that you want.

export default mongoose.model('Users', UserSchema);
