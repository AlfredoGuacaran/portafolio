import express from 'express';
const router = express.Router();
import { createSkill } from '../controllers/skills.js';

router.post('/skills', createSkill);

export default router;
