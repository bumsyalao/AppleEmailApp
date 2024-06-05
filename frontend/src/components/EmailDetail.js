import React from 'react';

const EmailDetail = ({ email }) => {
    if (!email) return <h3 className='no-email-select'>No email selected</h3>;

    return (
        <div className="email-detail">
            <h2>{email.subject}</h2>
            {email.to && <p><strong>To:</strong> {email.to}</p>}
            {email.cc && <p><strong>CC:</strong> {email.cc}</p>}
            {email.bcc && <p><strong>BCC:</strong> {email.bcc}</p>}
            <p className='email-body'>{email.body}</p>
        </div>
    );
};

export default EmailDetail;
