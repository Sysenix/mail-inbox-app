import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inbox from './components/Inbox';
import ComposeEmail from './components/ComposeEmail';
import EmailDetails from './components/EmailDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/compose" element={<ComposeEmail />} />
          <Route path="/email/:id" element={<EmailDetails />} />
          <Route path="/" element={<Inbox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
