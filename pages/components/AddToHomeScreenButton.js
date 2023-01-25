import React, { useState } from 'react';
import { useOnClient } from 'next-on-client';

const AddToHomeScreenButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const isClient = useOnClient();

  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
  };

  const handleAddToHomeScreenClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (isClient) {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return (
      <button onClick={handleAddToHomeScreenClick}>
        Add to Home Screen
      </button>
    );
  }
  return null;
};

export default AddToHomeScreenButton;
