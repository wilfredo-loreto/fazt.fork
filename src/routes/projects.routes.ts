import { Router } from "express";

import * as projectCtrl from "../controllers/project.controller";

const router = Router();

router.route('/')
  .get(projectCtrl.getProjects)
  .post(projectCtrl.createProject)

router.route('/:id')
  .get(projectCtrl.getProject)
  .put(projectCtrl.updateProject)
  .delete(projectCtrl.deleteProject)

export default router;