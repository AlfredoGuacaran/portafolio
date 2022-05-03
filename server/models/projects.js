import mongoose from 'mongoose';const projectSchema = mongoose.Schema({
  title: String,
  tags: String,
  description: String,
  img: String,
  githubLink: String,
  liveLink: String,
  ranking: Number,
});

const ProjectModel = mongoose.model('ProjectModel', projectSchema);

export default ProjectModel;
