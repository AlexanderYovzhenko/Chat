import { FastifyPluginAsync } from 'fastify'
import { chat, home, notFound } from './controller'

const routes: FastifyPluginAsync = async (app): Promise<void> => {
  app.get('/*', notFound)

  app.get('/', home)

  app.get('/chat', { websocket: true }, chat)
}

export { routes }
