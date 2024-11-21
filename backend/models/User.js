import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true},
});

const User = mongoose.model(`to_do`, userSchema);

export default User;
