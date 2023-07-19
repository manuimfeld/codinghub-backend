import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profiles',
    },
    role: { type: String, default: 'user' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = mongoose.model('Users', userSchema);
