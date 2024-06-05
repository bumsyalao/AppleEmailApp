import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import EmailDetail from '../components/EmailDetail';

const fetchEmails = async (searchTerm) => {
  const res = await fetch(`/api/emails?search=${searchTerm}`);
  return res.json();
};

const Index = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    fetchEmails('').then(setEmails);
  }, []);

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
  };

  const handleSearch = (term) => {
    fetchEmails(term).then(setEmails);
  };

  return (
    <Layout onSearch={handleSearch} setEmails={setEmails} onEmailSelect={handleEmailSelect} emails={emails}>
      <div className="content">
        <EmailDetail email={selectedEmail} />
      </div>
    </Layout>
  );
};

export default Index;
