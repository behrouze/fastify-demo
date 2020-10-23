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

  fastify.get('/error-mgmt', opts, async (request, reply) => {
    Object.keys(request.query).length == 0
      ? reply.status(201).send({})
      : reply
          .header('Content-Type', 'application/json; charset=utf-8')
          .send({
            hello: 'The World is Async',
            query: request.query.toto,
            autre: 'ne devrait pas etre sérialisé',
            isAdult: request.query.age >= 18,
          })
          .then(fullfilled, rejected);
  });

  fastify.get('/throw-err', async (request, reply) => {
    if (Object.keys(request.query).length > 0)
      return {
        params: request.query,
      };
    else
      throw {
        statusCode: 404,
        message: 'aucunes data, car manque query param',
      };
  });
}

module.exports = routes;
