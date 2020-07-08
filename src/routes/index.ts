import { Router } from "express";

const routes = Router();

routes.use('/discord', require('./discord.routes'));
routes.use('/github', require('./github.routes'));
routes.use('/job', require('./jobs.routes'));
routes.use('/task', require('./tasks.routes'));
routes.use('/project', require('./projects.routes'));
routes.use('/user', require('./users.routes'));

export default routes;
