import type {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

function solveBLD3x3(scramble: string): string[] {
    return ["B", "D", "F'", "L'"];
}

interface SolutionQuery {
    scramble: string;
}



export async function scrambleRoutes(server: FastifyInstance) {


    server.get('/scramble', async (request, reply) => {
        const scramble: string[] = ["R", "U" ,"R'","U'"];
        return {scramble};
    });

    server.get<{ Querystring: SolutionQuery }>('/solution/bld3x3', async (request) => {
        const { scramble } = request.query;
        const solution = solveBLD3x3(scramble);
        return { solution };
    }); 

}