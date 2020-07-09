import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller';

import { handlerExceptionRoute } from '../error';

const router = Router();

router
  .route('/')
  .get(handlerExceptionRoute(userCtrl.getUsers))
  .post(handlerExceptionRoute(userCtrl.createUser));

router
  .route('/:id')
  .get(handlerExceptionRoute(userCtrl.getUser))
  .put(handlerExceptionRoute(userCtrl.updateUser))
  .delete(handlerExceptionRoute(userCtrl.deleteUser));

export default router;
