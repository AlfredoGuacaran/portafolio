import axios from 'axios';
import { CLOUDAPI } from '../constants/actionTypes';
const API = axios.create({ baseURL: CLOUDAPI });
export const createSkill = (newSkill) => API.post('/skills', newSkill);
export const getSkills = () => API.get('/skills');
export const deleteSkill = (_id) => API.delete(`/skills/${_id}`);
export const updateSkill = (newSkillData) => API.patch('/skills', newSkillData);
