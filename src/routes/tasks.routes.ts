import { Router } from 'express';

import * as taskCtrl from "../controllers/task.controllers";

const router = Router();

router.route('/')
    .get(taskCtrl.getTasks)
    .post(taskCtrl.createTask)

router.route('/:id')
    .get(taskCtrl.getTask)
    .put(taskCtrl.updateTask)
    .delete(taskCtrl.deleteTask)

export default router;