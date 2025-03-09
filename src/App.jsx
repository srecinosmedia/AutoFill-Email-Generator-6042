import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import EmailGenerator from './components/EmailGenerator';
import { EmailProvider } from './context/EmailContext';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EmailProvider>
        <Router>
          <Routes>
            <Route path="/" element={<EmailGenerator />} />
          </Routes>
        </Router>
      </EmailProvider>
    </QueryClientProvider>
  );
}

export default App;