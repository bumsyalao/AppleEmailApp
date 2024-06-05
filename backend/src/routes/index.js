import emailRoutes from './emails.js';

const routes = (fastify, options, done) => {
  fastify.register(emailRoutes);
  done();
};

export default routes;
