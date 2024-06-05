// ESM
import Fastify from 'fastify';
import knex from 'knex';

import fastifyCors from '@fastify/cors';
import knexConfig from './knexfile.js';
import routes from './src/routes/index.js';

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */

const fastify = Fastify({
  logger: true
});

// Initialize Knex
const db = knex(knexConfig.development);

// Enable CORS
fastify.register(fastifyCors, {
  origin: true
});

// Make knex available through fastify
fastify.decorate('knex', db);

// Register routes
fastify.register(routes);

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3001 });
    fastify.log.info(`Server is now listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();