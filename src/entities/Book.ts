import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from './Gender';
import { PublishingCompany } from './PublishingCompany';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Gender, (gender) => gender.book)
  @JoinColumn({ name: 'gender_id' })
  genders: Gender[];

  @ManyToMany(() => PublishingCompany, publishingCompany => publishingCompany.books)
  publishing_company: PublishingCompany[]

}