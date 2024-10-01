import { Router } from 'express';
import { createProject, updateProject } from '../controllers/projectController';
const router = Router();

// Create a new project
router.post('/', createProject);

// Update a project
router.put('/', updateProject);

export default router;