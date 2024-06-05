export default (fastify, opts, done) => {
    fastify.get('/api/emails', async (request, reply) => {
        const { search } = request.query;
        const query = fastify.knex('emails');

        if (search) {
            query.where(function () {
                this.where('to', 'like', `%${search}%`)
                    .orWhere('cc', 'like', `%${search}%`)
                    .orWhere('bcc', 'like', `%${search}%`)
                    .orWhere('subject', 'like', `%${search}%`)
                    .orWhere('body', 'like', `%${search}%`);
            });
        }

        const emails = await query;
        reply.send(emails);
    });

    fastify.post('/api/emails', async (request, reply) => {
        const { to, cc, bcc, subject, body } = request.body;
        try {
            const [id] = await fastify.knex('emails').insert({
                to: to.join(','),
                cc: cc.join(','),
                bcc: bcc.join(','),
                subject,
                body
            });

            const newEmail = await fastify.knex('emails').where({ id }).first();
            reply.send(newEmail);
        } catch (error) {
            console.error('Failed to insert email:', error);
            reply.status(500).send({ error: 'Failed to send email' });
        }
    });

    done();
};
