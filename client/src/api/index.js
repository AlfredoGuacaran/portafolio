import axios from 'axios';
import { LOCALAPI } from '../constants/actionTypes';
const API = axios.create({ baseURL: LOCALAPI });
export const createSkill = (newSkill) => API.post('/skills', newSkill);
export const getSkills = () => API.get('/skills');
