import { FastifyRequest, FastifyReply } from 'fastify'
import { SocketStream } from '@fastify/websocket'
import statusCode from './common/status.code'

const notFound = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(statusCode.NOT_FOUND).send('Page not found - 404')
}

const home = async (_: FastifyRequest, reply: FastifyReply) => {
  reply.code(statusCode.OK).send({ Message: 'Server is running!' })
}

const chat = (connection: SocketStream, request: FastifyRequest) => {
  const query = request.query
  console.log(query)

  // const { user } = query;
  console.info('Client connected')

  connection.socket.on('message', (message: string) => {
    console.log(message)

    connection.socket.send('Hello Fastify WebSockets')
  })

  connection.socket.on('close', () => {
    console.info('Client disconnected')
  })
}

export { notFound, home, chat }
