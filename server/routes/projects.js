import express from 'express';const router = express.Router();
import { createProject, getProjects, deleteProject } from '../controllers/projects.js';

router.post('/', createProject);
router.get('/', getProjects);
router.delete('/:_id', deleteProject);

export default router;
