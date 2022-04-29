import express from 'express';
const router = express.Router();
import { createSkill, getSkills } from '../controllers/skills.js';

router.post('/', createSkill);
router.get('/', getSkills);

export default router;
