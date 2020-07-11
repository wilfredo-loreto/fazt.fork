import { Router } from 'express';
import * as jobCtrl from '../controllers/jobs.controller';
import { handlerExceptionRoute} from '../error';

const router = Router();

/**
 * @api {get} /jobs Obtiene un Job
 * @apiDescription Obtiene un Job registrado en la base de datos
 * @apiName GetJobs
 * @apiGroup Jobs
 *
 * @apiSuccess {String} title Title of the Job.
 * @apiSuccess {String} description Description of the Job.
 * @apiSuccess {String} employer Employer of the Job.
 * @apiSuccess {String} employerEmail Employer email of the Job.
 * @apiSuccess {String} proposals Proposals of the Employer Job .
 * @apiError Error getting jobs.
 */
router.get('/', handlerExceptionRoute(jobCtrl.getJobs));

/**
 * @api {post} /jobs Crea un nuevo Job
 * @apiDescription Crea un nuevo Job y lo guardada en la base de datos
 * @apiName PostJob
 * @apiGroup Job
 * 
 * @apiParam (Request body) {String} title Titulo del trabajo
 * @apiParam (Request body) {String} description Descripción del trabajo
 * @apiParam (Request body) {String} employer Empleado del trabajo
 * @apiParam (Request body) {String} employerEmail Correo electrónico del empleado
 * @apiParam (Request body) {String} proposals 
 * 
 * @apiSuccess {String} title Titulo del del trabajo
 * @apiSuccess {String} description Descripcion del trabajo
 * @apiSuccess {String} employeer Empleado del trabajo
 * @apiSuccess {String} employeerEmail Correo electrónico del empleado
 * @apiError Error creating Job.
 */
router.post('/', handlerExceptionRoute(jobCtrl.createJob));

/**
 * @api {get} /jobs/:id Obtiene un trabajo en específico.
 * @apiDescription Obtiene un trabajo en especifico de los guardados en la base de datos
 * @apiName GetJobID
 * @apiGroup Jobs
 *
 * @apiParam id
 *
 * @apiSuccess {String} title Title of the job.
 * @apiSuccess {String} description Description of the Job.
 * @apiSuccess {String} employeer Employeer of the job
 * @apiSuccess {String} employeerEmail E-mail of the employer.
 * 
 * @apiError Job not found.
 */
router.route('/:id').get(handlerExceptionRoute(jobCtrl.getJob));

/**
 * @api {put} /jobs/:id Actualiza un trabajo en especifico.
 * @apiDescription Obtiene un trabajo en especifico de los guardados en la base de datos y lo actualiza.
 * @apiName GetJobID
 * @apiGroup Jobs
 *
 * @apiParam id
 * @apiParam (Request body) {String} title Titulo del trabajo
 * @apiParam (Request body) {String} description Descripción del trabajo
 * @apiParam (Request body) {String} employeer Empleado del trabajo
 * @apiParam (Request body) {String} employerEmail Correo electrónico del empleado
 *
 * @apiSuccess {String} name Titulo del trabajo
 * @apiSuccess {String} description Descripción del trabajo
 * @apiSuccess {String} employer Empleado del trabajo
 * @apiSuccess {String} employerEmail Correo electrónico del empleado
 * 
 * @apiError Error updating job.
 */
router.route('/:id').put(handlerExceptionRoute(jobCtrl.updateJob));


/**
 * @api {delete} /jobs/:id Elimina un trabajo en especifico.
 * @apiDescription Obtiene un trabajo en especifico de los guardados en la base de datos y lo elimina.
 * @apiName DeleteJobID
 * @apiGroup Jobs
 *
 * @apiParam id
 *
 * @apiSuccess {String} name Titulo del trabajo
 * @apiSuccess {String} description Descripción del trabajo
 * @apiSuccess {String} employer Empleado del trabajo
 * @apiSuccess {String} employerEmail Correo electrónico del trabajo
 *  
 * @apiError Error deleting user.
 */
router.route('/:id').delete(handlerExceptionRoute(jobCtrl.deleteJob));

export default router;
