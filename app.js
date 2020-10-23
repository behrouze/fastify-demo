// liste des plugins de l'écosysteme Fastify: https://www.fastify.io/ecosystem/
// installe un handler 'unhandledRejection' pour éviter les fuites mémoires
require('make-promises-safe');

const fastify = require('fastify')({
  logger: true,
  ignoreTrailingSlash: true,
  caseSensitive: false,
});

// fastify charge les plugin/route dans l'ordre des registers
// register API pour enregistrer les routes ou plugins (https://www.fastify.io/docs/v1.14.x/Routes/)
fastify.register(require('./routes/basicsGet'));
fastify.register(require('./routes/basicsPost'));

const start = async () => {
  try {
    // fastify démarre le chargement des plugins ici
    await fastify.listen(3000, '0.0.0.0');
    fastify.log.info(`===> server listening 👍`);
  } catch (err) {
    fastify.log.error(`🤳 ${err}`);
    process.exit(1);
  }
};

start();
