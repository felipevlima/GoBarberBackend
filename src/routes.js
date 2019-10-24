/**
 * Module Imports
 */
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

/**
 * Controllers Import
 */
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

/**
 * Middlewares Import
 */
import authMiddleware from './app/middlewares/auth';

/**
 * Define routes and uploads constants
 */
const routes = new Router();
const upload = multer(multerConfig);

/**
 * Public routes
 */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

/**
 * Auth Middleware
 */
routes.use(authMiddleware);

/**
 * Auth Users
 */
routes.put('/users', UserController.update);

/**
 * Providers
 */
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

/**
 * Appointments
 */
routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.delete);

/**
 * Schedule
 */
routes.get('/schedule', ScheduleController.index);

/**
 * Notifications
 */
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

/**
 * Files
 */
routes.post('/files', upload.single('file'), FileController.store);

export default routes;