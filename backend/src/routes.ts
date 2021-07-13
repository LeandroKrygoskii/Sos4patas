import { Router } from 'express';
import AdoptionController from './controllers/AdoptionsController';
import RequestAdoptionsController from './controllers/RequestAdoptionsController';
import uploadConfig from './config/upload';
import Multer from 'multer';
import UserController  from './controllers/AdmController';
import DenunciasController from './controllers/DenunciasController';
import authMiddleware from './middleware/authMiddleware';

const routes = Router();
const uploads = Multer(uploadConfig);

routes.post('/create_adoption', uploads.array('images') ,AdoptionController.create)
routes.post('/req_adoption', uploads.single('adoption'), RequestAdoptionsController.create)
routes.post('/denuncias', uploads.single('denuncias'), DenunciasController.create)
routes.get('/denuncias', DenunciasController.index)
routes.post('/create_user',  uploads.single('userref'), UserController.create)
routes.post('/auth/refresh' , authMiddleware , UserController.checkToken);
routes.post('/auth',uploads.single('user'), UserController.login)
routes.get('/adoption' , AdoptionController.index)
routes.get('/adoption/:id' , AdoptionController.show)
routes.delete('/adoption/:id', AdoptionController.delete)


export default routes;