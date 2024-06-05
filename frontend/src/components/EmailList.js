import React from 'react';

const EmailList = ({ emails, onEmailSelect }) => {

    return (
        <div className="email-list-container">
            {emails.length === 0 ? (
                <p>No emails. Compose new email.</p>
            ) : (
                <ul className="email-list">
                    {emails?.map(email => (
                        <li key={email.id} onClick={() => onEmailSelect(email)}>
                            <div>
                                <h3>{email.subject}</h3>
                                <p>{email.to}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EmailList;
