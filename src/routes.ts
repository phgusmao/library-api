import { Router } from 'express';
import { BookController } from './controllers/BookController';
import { PublishingCompanyController } from './controllers/PublishingCompanyController';

const routes = Router();

routes.post('/publishing_company', new PublishingCompanyController().create)
routes.post('/book', new BookController().create)
routes.post('/book/:idBook/create', new BookController().createGender)
routes.post('/book/:idBook/publishing_company', new BookController().bookCompany);
routes.get('/book', new BookController().listBook)

export default routes;