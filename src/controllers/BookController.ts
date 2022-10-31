import { Request, Response } from 'express';
import { bookRepository } from '../repositories/bookRepository';
import { genderRepository } from '../repositories/genderRepository';
import { publishingCompanyRepository } from '../repositories/publishingCompanyRepository';

export class BookController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;

    try {
      const newBook = bookRepository.create({
        title, description
      })

      await bookRepository.save(newBook)

      return res.status(201).json(newBook);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async createGender(req: Request, res: Response) {
    const { name, description } = req.body;
    const { idBook } = req.params

    try {
      const book = await bookRepository.findOneBy({ id: Number(idBook) })

      if (!book) {
        return res.status(404).json({ message: 'Book dont exists!' })
      }

      const newGender = genderRepository.create({
        name,
        description,
        book
      })

      await genderRepository.save(newGender);

      return res.status(201).json(newGender)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async bookCompany(req: Request, res: Response) {
    const { publishing_company_id } = req.body;
    const { idBook } = req.params

    try {
      const book = await bookRepository.findOneBy({ id: Number(idBook) })

      if (!book) {
        return res.status(404).json({ message: 'Book dont exists!' })
      }

      const publishing_company = await publishingCompanyRepository.findOneBy({ id: publishing_company_id })

      if (!publishing_company) {
        return res.status(404).json({ message: 'Publishing Company dont exists!' })
      }

      const bookUpdate = {
        ...book,
        publishing_company: [publishing_company]
      }

      await bookRepository.save(bookUpdate)

      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async listBook(req: Request, res: Response) {
    try {
      const books = await bookRepository.find({
        relations: {
          publishing_company: true
        }
      });

      return res.json(books);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}