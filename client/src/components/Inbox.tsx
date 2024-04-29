import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Email {
  _id: string;
  sender: string;
  subject: string;
}

const Inbox = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios.get('/api/emails');
      setEmails(response.data);
    };
    fetchEmails();
  }, []);

  return (
    <div>
      <h1>Inbox</h1>
      <ul>
        {emails.map((email) => (
          <li key={email._id}>
            <Link to={`/email/${email._id}`}>
              <strong>{email.sender}</strong>: {email.subject}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/compose">Compose</Link>
    </div>
  );
};

export default Inbox;
