# TypeORM Playground (v0.2.45)

This repo contains a minimal TypeORM v0.2.45 setup, so you can tinker around with it and see how it works.

To get started...
1. Install dependencies: `npm i`
2. Spin up the database: `docker-compose up -d`
2. Generate a migration: `npm run typeorm -- migration:generate -n Init`
4. Apply the migration: `npm run typeorm -- migration:run`
5. That's it! Now you can run this file and play around with TypeORM using `npm start`
6. Connect to the database with a GUI using...
   - Host: `localhost`
   - Port: `5445`
   - User: `test`
   - Password: `test`
   - Database: `test`
