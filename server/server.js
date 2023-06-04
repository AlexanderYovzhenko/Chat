import fastify from 'fastify';
import fastifyWebsocket from 'fastify-websocket';
import { routes } from './src/routes';

const PORT = 4000;
const app = fastify();

app.register(fastifyWebsocket,
    {
        options: { maxPayload: 100 },    
    }
);

app.register(routes);

app.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.info(`Server running at: ${address}`);
});
