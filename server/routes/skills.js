import express from 'express';const router = express.Router();
import { createSkill, getSkills, deleteSkill, updateSkill } from '../controllers/skills.js';

router.post('/', createSkill);
router.patch('/', updateSkill);

router.get('/', getSkills);
router.delete('/:_id', deleteSkill);

export default router;
