// l'objets suivant permet de valider/serialiser
const opts = {
  schema: {
    querystring: {
      toto: { type: 'string' },
      age: { type: 'number' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          query: { type: 'string' },
          isAdult: { type: 'boolean' },
        },
      },
    },
  },
};

async function routes(fastify, options) {
  fastify.get('/', function (request, reply) {
    reply.send({ hellouuu: 'world' });
  });

  fastify.get('/async', opts, async (request, reply) => {
    return {
      hello: 'The World is Async',
      query: request.query.toto,
      autre: 'ne devrait pas etre sérialisé',
      isAdult: request.query.age >= 18,
    };
  });
}

module.exports = routes;
