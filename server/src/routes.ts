import { FastifyPluginAsync } from 'fastify'
import { wsHandler, home, notFound } from './controller'

const routes: FastifyPluginAsync = async (app): Promise<void> => {
  app.get('/*', notFound)

  app.get('/', home)

  app.get('/chat', { websocket: true }, wsHandler)
}

export { routes }
