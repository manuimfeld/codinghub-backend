import mongoose from 'mongoose';
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    firstname: { type: String },
    lastname: { type: String },
    genre: { type: String },
    age: { type: Number },
    country: { type: String },
    cv_url: { type: String },
    technologies: [],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Profile = mongoose.model('Profiles', profileSchema);
