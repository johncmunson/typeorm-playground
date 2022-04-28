import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Author } from "./Author"

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  authorId!: number

  @ManyToOne(() => Author, (author) => author.books)
  author?: Author[]
}
