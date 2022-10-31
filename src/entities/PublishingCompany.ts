import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './Book';

@Entity('publishing_company')
export class PublishingCompany {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text' })
  name: string;

  @ManyToMany(() => Book, (book) => book.publishing_company)
  @JoinTable({
    name: 'book_publishing_company',
    joinColumn: {
      name: 'book_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'publishing_company_id',
      referencedColumnName: 'id'
    }
  })
  books: Book[];
}