import mongoose from 'mongoose';const skillSchema = mongoose.Schema({
  name: String,
  skillIcon: String,
  ranking: Number,
});

const SkillModel = mongoose.model('SkillModel', skillSchema);

export default SkillModel;
