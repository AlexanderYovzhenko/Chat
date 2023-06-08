import { FastifyRequest, FastifyReply } from 'fastify'
import { SocketStream } from '@fastify/websocket'
import statusCode from './common/statusCode'
import { app } from './app'

const notFound = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(statusCode.NOT_FOUND).send('Page not found - 404')
}

const home = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(statusCode.OK).send({ Message: 'Server is running!' })
}

const messages: string[] = ['Welcome to chat!']

const wsHandler = async (connection: SocketStream, _: FastifyRequest) => {
  connection.setEncoding('utf8')
  connection.socket.send(JSON.stringify(messages))
  console.info('Client connected')

  connection.socket.on('message', (message: string) => {
    messages.push(message.toString())

    app.websocketServer.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(JSON.stringify([message.toString()]))
      }
    })
  })

  connection.socket.on('close', () => {
    console.info('Client disconnected')
  })
}

export { notFound, home, wsHandler }
