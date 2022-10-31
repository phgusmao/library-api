import { AppDataSource } from '../data-source';
import { PublishingCompany } from '../entities/PublishingCompany';

export const publishingCompanyRepository = AppDataSource.getRepository(PublishingCompany);