import axios from 'axios';
import { CLOUDAPI, LOCALAPI } from '../constants/actionTypes';
const API = axios.create({ baseURL: LOCALAPI });
export const createSkill = (newSkill) => API.post('/skills', newSkill);
export const getSkills = () => API.get('/skills');
export const deleteSkill = (_id) => API.delete(`/skills/${_id}`);
export const updateSkill = (newSkillData) => API.patch('/skills', newSkillData);

export const createProject = (newProject) => API.post('/projects', newProject);
export const getProjects = () => API.get('/projects');
export const deleteProject = (_id) => API.delete(`/projects/${_id}`);
