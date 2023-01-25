import React, { useEffect, useState } from 'react';
import {IoShareOutline} from "react-icons/io5"

const AddToHomeScreenButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    };
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <button onClick={handleAddToHomeScreenClick}>
       <spna className="mx-3 flex text-xs ">Click
          <div className="rounded-full p-1 hover:bg-white cursor-pointer ease-in-out duration-150"><IoShareOutline size={25} /></div>
        </spna>
    </button>
  );
};


export default AddToHomeScreenButton;
