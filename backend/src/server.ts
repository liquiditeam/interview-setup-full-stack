import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs/promises';
import { createServer } from 'http';
import path from 'path';
import { resourceResolver } from './resolvers/resource';
import { Context } from './utils/context';
import pool from './utils/pool';

const PORT = +(process.env.PORT || 4000);

// TODO: create indices for foreign keys and for fields that need to be ordered
// TODO: add loaders for n+1 queries https://github.com/graphql/dataloader

const main = async () => {
  // Load all SDL files from the `schema` directory
  const sdlFiles = (await fs.readdir(path.join(__dirname, '../schema'))).filter((file) => file.endsWith('.gql'));
  const typeDefs = await Promise.all(
    sdlFiles.map((file) => fs.readFile(path.join(__dirname, '../schema', file), 'utf8')),
  );

  // Create an executable schema that can be used be the apollo server from the type definitions and resolvers
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [resourceResolver],
  });

  // Create an express app and a http server
  const app = express();
  const httpServer = createServer(app);

  // Create an apollo server from the schema
  const server = new ApolloServer<Context>({
    schema,
    plugins: [
      // Enable the drainHttpServer plugin to close the http server and websocket server when the apollo server is stopped
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  // Start the apollo server
  await server.start();

  // Mount the apollo server middleware to the express app
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, { context: async () => ({ pool }) }),
  );

  // Start the http server
  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
