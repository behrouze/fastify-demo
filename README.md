# Fastify

## But de ce repo

Me permettre de me faire la main sur le **framework web Nodejs Fastify**

## Notes

Notes tirés de la [doc officelle](https://www.fastify.io/docs/latest/Getting-Started/)

### Plugins

Fastify will load your plugins in the same order you declare them, and it will load the next plugin only once the current one has been loaded.

Plugin loading starts when you call fastify.listen(), fastify.inject() or fastify.ready()

Loading order of your plugins
└── plugins (from the Fastify ecosystem)
└── your plugins (your custom plugins)
└── decorators
└── hooks and middlewares
└── your services

### Decorateurs

Fastify offers the decorate API, which adds custom objects to the Fastify namespace, so that they can be used everywhere.

### Validation/Serialisation

Data validation is extremely important and is a core concept of the framework.
an options object to the route, which accepts a schema key, that contains all of the schemas for route, body, querystring, params and headers.
