import { AppDataSource } from '../data-source';
import { Gender } from '../entities/Gender';

export const genderRepository = AppDataSource.getRepository(Gender)