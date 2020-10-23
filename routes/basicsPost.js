async function routes(fastify, options) {
  const postOpts = {
    schema: {
      querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' },
      },
    },
  };

  fastify.post('/formulaire', postOpts, async (request, reply) => {
    return { saved: 'document saved' };
  });
}

module.exports = routes;
