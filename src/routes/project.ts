const express = require('express');
const router = express.Router();
import { projectController } from '../controllers/project';
import { checkJwt } from '../middlewares/session';

router.post('/project', checkJwt, projectController.postProject);
router.put('/project/:id', checkJwt, projectController.editProject);
router.delete('/project/:id', checkJwt, projectController.deleteProject);
router.get('/project/:id', projectController.getProject);
router.get('/projects', projectController.getProjects);

module.exports = router;
