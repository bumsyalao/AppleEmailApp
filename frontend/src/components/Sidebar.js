import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmailList from './EmailList';

const Sidebar = ({ onEmailSelect, emails }) => {

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

