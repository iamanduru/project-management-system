import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model('User', userSchema);
export default User;

/*import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type:String, required: true, unique: true },
    password: {type: String, required: true },
    organizations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Organization'}], //Organization of the user
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] //Project of the user
});

//For the hash Password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
module.exports = User; */
