import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: String, required: true },
    difficulty: { type: String, required: true },
    project_type: { type: String, required: true },
    project_status: { type: String, required: true },
    project_autor: { type: String, required: true },
    project_autor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    project_participants: [],
    repo_url: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Project = mongoose.model('Projects', projectSchema);
