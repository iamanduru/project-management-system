import { Router } from 'express';
import { getProjectActivities } from '../controllers/activityController';
const router = Router();

// Get activities for a project
router.get('/project-management-frontend/src/components/ActivityLog/ActivityLog.jsx', getProjectActivities);

export default router;