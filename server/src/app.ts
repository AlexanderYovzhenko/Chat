import Fastify, { FastifyInstance } from 'fastify'
import fastifyWebsocket from '@fastify/websocket'
import { routes } from './routes'
import { PORT } from './common/config'

export const app: FastifyInstance = Fastify({
  logger: false,
})

app.register(fastifyWebsocket, { options: { clientTracking: true } })

app.register(routes)

app.listen({ port: +PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.info(`Server running at: ${address}`)
})
