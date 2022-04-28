import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Book } from "./Book"

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @OneToMany(() => Book, (book) => book.author)
  books?: Book[]
}
