import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  id: string;
}

const EmailDetails: React.FC = () => {
  const { id } = useParams!<Params>();

  return (
    <div>
      <h2>Email Details</h2>
      <p>Email ID: {id}</p>
      <p>Sender: John Doe</p>
      <p>Subject: Lorem ipsum dolor sit amet</p>
      <p>Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default EmailDetails;
