import React from 'react';
import { useParams } from 'react-router-dom';

const EmailDetails = () => {
  const { id } = useParams();

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
