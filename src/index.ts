import "reflect-metadata";
import { Book } from "./entity/Book";
import { Author } from "./entity/Author";
import { createConnection, getRepository } from "typeorm";

createConnection().then(async connection => {

  /**
   * To get started playing around with this repo...
   *   1. Install dependencies: npm i
   *   2. Spin up the database: docker-compose up -d
   *   2. Generate a migration: npm run typeorm -- migration:generate -n Init
   *   4. Apply the migration: npm run typeorm -- migration:run
   *   5. That's it! Now you can run this file and play around with TypeORM using npm start
   *   6. Connect to the database with a GUI using...
   *     - Host: localhost
   *     - Port: 5445
   *     - User: test
   *     - Password: test
   *     - Database: test
   */

  const authorRepo = getRepository(Author)
  const bookRepo = getRepository(Book)

  const author = await authorRepo.save({ firstName: 'Mark', lastName: 'Twain' })
  await bookRepo.save({ title: 'The Adventures of Tom Sawyer', authorId: author.id })
  await bookRepo.save({ title: 'Adventures of Huckleberry Finn', authorId: author.id })

  const authorWithBooks = await authorRepo.findOne(author.id, { relations: ['books'] })

  console.log(authorWithBooks)

}).catch(error => console.log(error));
