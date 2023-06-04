const routes = async (app) => {
  app.get('/*', (_, reply) => {
    reply.status(404);
    reply.send({
        message: 'Page not found 404'
    });
  });

  app.get('/', (_, reply) => {
    reply.status(200);
    reply.send({
        message: 'Server is running!'
    });
  });

  app.get('/chat', { websocket: true }, (connection, req) => {
    console.log('Client connected');

    connection.socket.on('message', message => {
        connection.socket.send('Hello Fastify WebSockets');
    });

    connection.socket.on('close', () => {
      console.log('Client disconnected');
    });
  });
}

export {
  routes,
}
