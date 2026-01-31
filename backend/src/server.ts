import Fastify from 'fastify';
import {scrambleRoutes} from './routes/scramble.js';
import cors from '@fastify/cors';

const server = Fastify({logger: true});
const port = Number(process.env.PORT) || 3000;



const start = async () => {

  await server.register(cors);
  await server.register(scrambleRoutes);
  

  try {
    await server.listen({port});
  }
    catch (err) { 
    server.log.error(err);
    process.exit(1);
  }
};

start();