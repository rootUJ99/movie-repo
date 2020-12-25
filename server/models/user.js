import mongoose from 'mongoose';
const { Schema, model } =  mongoose;

const userSchema = Schema({
  username: String,
  password: String,
  access: { type: String, enum: ['BASIC', 'ADMIN']}
});

const UserModel = model('users', userSchema);
export default UserModel;