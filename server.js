const fastify = require('fastify')({
    logger: true
})
fastify.register(require('./routes/songs'))
fastify.register(require('fastify-swagger'),{
  exposeRoute: true,
  routePrefix: '/docs',
  swagger:{
    info: { title: 'fastify-api' },
  }
})
const PORT = 5000

const start = async () => {
    try {
      await fastify.listen(PORT)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
}

start()