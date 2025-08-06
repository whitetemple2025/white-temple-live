import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ConfessionPortal } from './components/ConfessionPortal';
import { ApprovedMessages } from './components/ApprovedMessages';
import { TempleDoctrines } from './components/TempleDoctrines';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'confession' | 'messages' | 'doctrines';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToConfession = () => {
    setCurrentPage('confession');
  };

  const navigateToMessages = () => {
    setCurrentPage('messages');
  };

  const navigateToDoctrines = () => {
    setCurrentPage('doctrines');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-black text-misty-white overflow-x-hidden">
      {currentPage === 'home' && (
        <HomePage 
          onEnterTemple={navigateToConfession} 
          onViewMessages={navigateToMessages}
          onEnterDoctrines={navigateToDoctrines}
        />
      )}
      
      {currentPage === 'confession' && (
        <ConfessionPortal onBack={navigateToHome} />
      )}

      {currentPage === 'messages' && (
        <ApprovedMessages onBack={navigateToHome} />
      )}

      {currentPage === 'doctrines' && (
        <TempleDoctrines onBack={navigateToHome} />
      )}

      <Toaster 
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            color: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      />
    </div>
  );
}