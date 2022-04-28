import "reflect-metadata";
import { Book } from "./entity/Book";
import { Author } from "./entity/Author";
import { createConnection, getRepository } from "typeorm";

createConnection().then(async connection => {

  const authorRepo = getRepository(Author)
  const bookRepo = getRepository(Book)

  const author = await authorRepo.save({ firstName: 'Mark', lastName: 'Twain' })
  await bookRepo.save({ title: 'The Adventures of Tom Sawyer', authorId: author.id })
  await bookRepo.save({ title: 'Adventures of Huckleberry Finn', authorId: author.id })

  const authorWithBooks = await authorRepo.findOne(author.id, { relations: ['books'] })

  console.log(authorWithBooks)

}).catch(error => console.log(error));
