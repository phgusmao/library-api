import { Request, Response } from 'express';
import { publishingCompanyRepository } from '../repositories/publishingCompanyRepository';

export class PublishingCompanyController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'O nome é obrigatório' });
    }

    try {
      const newPublishingCompany = publishingCompanyRepository.create({
        name
      })

      await publishingCompanyRepository.save(newPublishingCompany)

      return res.status(201).json(newPublishingCompany)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}