import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './Book';

@Entity('genders')
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Book, book => book.genders)
  @JoinColumn({ name: 'book_id' })
  book: Book;

}