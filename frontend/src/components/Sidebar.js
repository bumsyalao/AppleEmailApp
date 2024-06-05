import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './EmailList';

const Sidebar = ({ onEmailSelect }) => {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const response = await axios.get('/api/emails');
            setEmails(response.data);
        } catch (error) {
            console.error('Failed to fetch emails:', error);
        }
    };

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div className="sidebar">
            <div className="header">
                <div className="header-info">
                    <h2>All Inboxes</h2>
                    <p>{emails.length} messages</p>
                </div>
            </div>
            {emails.length > 0 ? (
                <EmailList emails={emails} onEmailSelect={onEmailSelect} />
            ) : (
                <p>No emails, compose new email.</p>
            )}
        </div>
    );
};

export default Sidebar;

