import React, { createContext, useContext, useState, useEffect } from 'react';

const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
  const defaultCCs = [
    'kimberly@konnectionscertification.com',
    'stenorio54@hotmail.com',
    'alyy.bieber1994@gmail.com',
    'stevenrecinos2001@gmail.com'
  ];

  const [emailState, setEmailState] = useState({
    to: '',
    subject: '',
    body: '',
    attachments: [],
    template: 'initial',
    ccList: defaultCCs
  });

  useEffect(() => {
    const savedDraft = localStorage.getItem('emailDraft');
    if (savedDraft) {
      setEmailState(prev => ({
        ...prev,
        ...JSON.parse(savedDraft)
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emailDraft', JSON.stringify(emailState));
  }, [emailState]);

  return (
    <EmailContext.Provider value={{ emailState, setEmailState, defaultCCs }}>
      {children}
    </EmailContext.Provider>
  );
};