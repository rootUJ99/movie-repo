import mongoose from 'mongoose';
const { Schema, model } =  mongoose;

const userSchema = Schema({
  username: { type:String, required: true, unique:true, dropDups: true },
  password: { type:String, required: true,  unique:false}, 
  access: { type: String, enum: ['BASIC', 'ADMIN'], required: true}
});

const UserModel = model('users', userSchema);
export default UserModel;