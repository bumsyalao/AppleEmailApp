import axios from 'axios';

const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const { search } = req.query;
                const response = await axios.get(`http://localhost:3001/api/emails`, {
                    params: { search }
                });
                res.status(200).json(response.data);
            } catch (error) {
                console.error('Failed to fetch emails:', error);
                res.status(500).json({ error: 'Failed to fetch emails' });
            }
            break;

        case 'POST':
            try {
                const { to, cc, bcc, subject, body } = req.body;
                const response = await axios.post(`http://localhost:3001/api/emails`, {
                    to,
                    cc,
                    bcc,
                    subject,
                    body
                });
                res.status(201).json(response.data);
            } catch (error) {
                console.error('Failed to send email:', error);
                res.status(500).json({ error: 'Failed to send email' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
