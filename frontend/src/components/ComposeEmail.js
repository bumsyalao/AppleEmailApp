import React, { useState } from 'react';
import axios from 'axios';

const ComposeEmail = ({ onClose, onSend }) => {
    const [to, setTo] = useState('');
    const [cc, setCc] = useState('');
    const [bcc, setBcc] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const emailData = {
                to: to.split(',').map(email => email.trim()),
                cc: cc.split(',').map(email => email.trim()),
                bcc: bcc.split(',').map(email => email.trim()),
                subject,
                body
            };
            const response = await axios.post('/api/emails', emailData);
            onSend(response.data);
            // reset form after submission
            setTo('');
            setCc('');
            setBcc('');
            setSubject('');
            setBody('');
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    };

    return (
        <div className="compose-email">
            <h2>Compose Email</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="To"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="CC"
                    value={cc}
                    onChange={(e) => setCc(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="BCC"
                    value={bcc}
                    onChange={(e) => setBcc(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
                <button type="button" onClick={onClose}>Close</button>
            </form>
        </div>
    );
};

export default ComposeEmail;
